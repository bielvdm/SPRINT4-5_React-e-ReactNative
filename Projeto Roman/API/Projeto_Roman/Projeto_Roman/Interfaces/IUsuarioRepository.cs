using Projeto_Roman.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman.Interfaces
{
    interface IUsuarioRepository
    {
        //O METODO ABAIXO LISTA OS USUARIOS
        List<Usuario> Listar();

        //O METODO ABAIXO Loga o usuario
        Usuario Login(string email, string senha);



    }
}
