USE wishlist_senai_tarde
GO

SELECT * FROM desejo

SELECT * FROM usuario

SELECT descricao, email FROM desejo
INNER JOIN usuario
ON desejo.idDesejo = usuario.idUsuario