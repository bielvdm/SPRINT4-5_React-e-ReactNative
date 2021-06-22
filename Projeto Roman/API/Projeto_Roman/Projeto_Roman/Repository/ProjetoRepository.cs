using Projeto_Roman.Contexts;
using Projeto_Roman.Domains;
using Projeto_Roman.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman.Repository
{
    public class ProjetoRepository : IProjetoRepository
    {
        RomanContext ctx = new RomanContext(); 
        public void Cadastrar(Projeto novoProjeto)
        {
            ctx.Projetos.Add(novoProjeto);

            //SALVA AS ALTERAÇÕES FEITAS
            ctx.SaveChanges();
        }

        public List<Projeto> Listar()
        {
            return ctx.Projetos.ToList();
        }
    }
}
