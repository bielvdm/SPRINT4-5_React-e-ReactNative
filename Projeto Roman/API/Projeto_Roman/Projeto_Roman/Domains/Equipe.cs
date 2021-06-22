using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Roman.Domains
{
    public partial class Equipe
    {
        public Equipe()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdEquipe { get; set; }
        public string Nome { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
