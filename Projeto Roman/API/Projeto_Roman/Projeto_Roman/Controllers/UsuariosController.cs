using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projeto_Roman.Interfaces;
using Projeto_Roman.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman.Controllers
{   
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository _usuario { get; set; }

        public UsuariosController()
        {
            _usuario = new UsuarioRepository();
        }

//-----------------------------------------------------------------

[HttpGet]

        //CHAMA O METODO DE LISTAR
        public IActionResult Get()
        {
            //RETORNA A LISTA DE CONSULTAS
            return Ok(_usuario.Listar());
        }

//-----------------------------------------------------------------
    }
}
