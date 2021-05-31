using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using wishlist_senai_tarde.Contexts;
using wishlist_senai_tarde.Domains;
using wishlist_senai_tarde.Interfaces;

namespace wishlist_senai_tarde.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {
        WishList ctx = new WishList();
        public void Atualizar(int id, Desejo desejoAtt)
        {
            Desejo desejoBuscado = ctx.Desejos.Find(id);

            if (desejoAtt.Descricao != null)
            {
                desejoBuscado.Descricao = desejoAtt.Descricao;
            }

            ctx.Desejos.Update(desejoBuscado);

            ctx.SaveChanges();
        }

        public Desejo BuscarPorId(int id)
        {
            return ctx.Desejos.FirstOrDefault(d => d.IdDesejo == id);
        }

        public void Cadastrar(Desejo desejo)
        {
            ctx.Desejos.Add(desejo);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Desejo desejoBuscado = ctx.Desejos.FirstOrDefault(d => d.IdDesejo == id);

            ctx.Desejos.Remove(desejoBuscado);

            ctx.SaveChanges();
        }

        public Desejo buscarComEmail(int id)
        {
            Desejo desejobuscado = ctx.Desejos.FirstOrDefault(x => x.IdUsuarioNavigation.IdUsuario == id);
            return desejobuscado;
        }

        public List<Desejo> ListarTodos()
        {
            return ctx.Desejos.ToList();
        }
    }
}
