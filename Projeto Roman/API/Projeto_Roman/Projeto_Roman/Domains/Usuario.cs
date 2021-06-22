using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Roman.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public int? IdTipoUsuario { get; set; }
        public int? IdEquipe { get; set; }

        public virtual Equipe IdEquipeNavigation { get; set; }
        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
    }
}
