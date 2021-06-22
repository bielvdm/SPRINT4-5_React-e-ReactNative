using Projeto_Roman.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman.Interfaces
{
    interface IProjetoRepository
    {
        List<Projeto> Listar();

        void Cadastrar(Projeto novaProjeto);
    }
}
