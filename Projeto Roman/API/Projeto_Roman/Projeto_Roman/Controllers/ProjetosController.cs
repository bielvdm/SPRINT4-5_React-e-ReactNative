using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projeto_Roman.Domains;
using Projeto_Roman.Interfaces;
using Projeto_Roman.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman.Controllers
{   [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        private IProjetoRepository _projeto { get; set; }

        public ProjetosController()
        {
            _projeto = new ProjetoRepository();
        }

[HttpGet]

        //CHAMA O METODO DE LISTAR
        public IActionResult Get()
        {
            //RETORNA A LISTA DE CONSULTAS
            return Ok(_projeto.Listar());
        }

[HttpPost]
        public IActionResult CadastraConsulta(Projeto novoProjeto)
        {
            //CHAMA O METODO DE CADASTRAR
            _projeto.Cadastrar(novoProjeto);

            //RETORNA STATUS CODE 201 - CREATED
            return StatusCode(201);
        }

    }
}
