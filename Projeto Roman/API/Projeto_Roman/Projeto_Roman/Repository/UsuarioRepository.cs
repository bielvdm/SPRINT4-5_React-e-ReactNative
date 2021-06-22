using Projeto_Roman.Contexts;
using Projeto_Roman.Domains;
using Projeto_Roman.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        RomanContext ctx = new RomanContext();

        public List<Usuario> Listar()
        {
            return ctx.Usuarios.ToList();
        }

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
