using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Roman.Domains
{
    public partial class Projeto
    {
        public int IdProjeto { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public int? IdTema { get; set; }

        public virtual Tema IdTemaNavigation { get; set; }
    }
}
