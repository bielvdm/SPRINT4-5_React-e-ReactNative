using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Projeto_Roman.Domains;
using Projeto_Roman.Interfaces;
using Projeto_Roman.Repository;
using Projeto_Roman.ViewModel;
using System.IdentityModel.Tokens.Jwt;
using System;
using System.Security.Claims;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public LoginController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// faz o login de um usuário
        /// </summary>
        /// <param name="login">Objeto com as informações de login</param>
        /// <returns>Um status code 200 - OK com o token</returns>
        [HttpPost]
        public IActionResult Post(LoginViewModel login)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.Login(login.Email, login.Senha);

                if (usuarioBuscado == null)
                {
                    return NotFound("E-mail ou senha inválidos!");
                }

                //Define as informações que serão armazenadas no token
                var claims = new[]
                {
                    //Email do usuario autenticado
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),

                    //Id do usuario autenticado
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),

                    //O tipo de usuario autenticado, definindo ele como parâmetro para o AUTHORIZE
                    new Claim(ClaimTypes.Role, usuarioBuscado.IdTipoUsuario.ToString())
                };

                //Chave de acesso ao token
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("projeto-roman-autenticacao"));

                //Credencias do token - header
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                //Token
                var token = new JwtSecurityToken(

                    issuer : "projetoRoman.webApi",      //Emissor do token
                    audience : "projetoRoman.webApi",    //Destinatário do token
                    claims : claims,                            //Dados da claim
                    expires : DateTime.Now.AddMinutes(60),      //Tempo de expiração
                    signingCredentials : creds                  //Credenciais do token
                );

                //Retorna OK com o token
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
