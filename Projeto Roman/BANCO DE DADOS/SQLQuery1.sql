---------------DDL----------------------

CREATE DATABASE Projeto_Roman;
GO

USE Projeto_Roman;
GO

-----------------------------------------

CREATE TABLE TipoUsuario
(
	idTipoUsuario  INT PRIMARY KEY IDENTITY,
	TipoUsuario	   Varchar(200)
);
GO

--------------------------------------

-----------------------------------------

CREATE TABLE Tema
(
	idTema		INT PRIMARY KEY IDENTITY,
	Nome		Varchar(200),
);
GO

-----------------------------------------

CREATE TABLE Projeto
(
	idProjeto	INT PRIMARY KEY IDENTITY,
	Nome		Varchar(200),
	Descricao	Varchar(200),
	IdTema		INT FOREIGN KEY REFERENCES Tema(idTema),
);
GO

-----------------------------------------

CREATE TABLE Equipe
(
	idEquipe INT PRIMARY KEY IDENTITY,
	Nome	 Varchar(200),
);
GO

-----------------------------------------

CREATE TABLE Usuario
(
	IdUsuario		INT PRIMARY KEY IDENTITY,
	Nome			Varchar(200),
	Email			Varchar(200),
	Senha			Varchar(200),
	idTipoUsuario	INT FOREIGN KEY REFERENCES TipoUsuario(idTipoUsuario),
	idEquipe		INT FOREIGN KEY REFERENCES Equipe(idEquipe),
);
GO