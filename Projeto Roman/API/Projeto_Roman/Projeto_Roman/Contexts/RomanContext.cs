using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Projeto_Roman.Domains;

#nullable disable

namespace Projeto_Roman.Contexts
{
    public partial class RomanContext : DbContext
    {
        public RomanContext()
        {
        }

        public RomanContext(DbContextOptions<RomanContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Equipe> Equipes { get; set; }
        public virtual DbSet<Projeto> Projetos { get; set; }
        public virtual DbSet<Tema> Temas { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                   //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source = DESKTOP-SL5KKOH; initial catalog = Projeto_Roman; integrated security = true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Equipe>(entity =>
            {
                entity.HasKey(e => e.IdEquipe)
                    .HasName("PK__Equipe__981ACF45DBA7CA5E");

                entity.ToTable("Equipe");

                entity.Property(e => e.IdEquipe).HasColumnName("idEquipe");

                entity.Property(e => e.Nome)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Projeto>(entity =>
            {
                entity.HasKey(e => e.IdProjeto)
                    .HasName("PK__Projeto__8FCCED76B4437363");

                entity.ToTable("Projeto");

                entity.Property(e => e.IdProjeto).HasColumnName("idProjeto");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTemaNavigation)
                    .WithMany(p => p.Projetos)
                    .HasForeignKey(d => d.IdTema)
                    .HasConstraintName("FK__Projeto__IdTema__3A81B327");
            });

            modelBuilder.Entity<Tema>(entity =>
            {
                entity.HasKey(e => e.IdTema)
                    .HasName("PK__Tema__BCD9EB484ABC0FE9");

                entity.ToTable("Tema");

                entity.Property(e => e.IdTema).HasColumnName("idTema");

                entity.Property(e => e.Nome)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__03006BFF1C1F44CC");

                entity.ToTable("TipoUsuario");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.TipoUsuario1)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("TipoUsuario");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF979AEC44D1");

                entity.ToTable("Usuario");

                entity.Property(e => e.Email)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.IdEquipe).HasColumnName("idEquipe");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.Nome)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdEquipeNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdEquipe)
                    .HasConstraintName("FK__Usuario__idEquip__403A8C7D");

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuario__idTipoU__3F466844");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
