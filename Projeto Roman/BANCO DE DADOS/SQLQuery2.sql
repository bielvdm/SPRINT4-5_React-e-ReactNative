USE Projeto_Roman;
GO

INSERT INTO TipoUsuario(TipoUsuario)
VALUES				   ('Professor'),
					   ('Administrador');

INSERT INTO Tema(Nome)
VALUES			('HQS'),
				('Gest�o'),
				('Banco de dados'),
				('BackEnd'),
				('FrontEnd');

INSERT INTO Projeto (Nome, Descricao, IdTema)
VALUES					('E-Players', 'Aplica��o quase inteiramente em html, Css, C# com objetivo de parecer um site de E-sports', 3),
						('SpMedicalGroup', 'Aplica��o que simula uma clinica, feito com banco de dados, BackEnd e FrontEnd', 2),
						('WishList', 'Aplica��o para simular uma lista de desejos feito com Banco de dados e FrontEnd', 1),
						('Relogio', 'Aplica��o feita totalmente em ReactJS', 3);

INSERT INTO Equipe(Nome)
VALUES				('Multimidia'),
					('Desenvolvimento de Sistemas'),
					('Redes');


INSERT INTO Usuario(Nome, Email, Senha, idTipoUsuario, idEquipe)
VALUES				('Guilherme', 'guilherme@email.com', 'gui123', 1, 1),
					('Gabriel', 'gabriel@email.com', 'gabriel123', 1, 1),
					('Lucas', 'lucas@email.com', 'lucas123', 2, 2),
					('Robert', 'robert@email.com', 'robert123', 2, 2);

