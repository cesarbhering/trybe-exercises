#Monte uma procedure que receba o email de um cliente como parâmetro de entrada e 
#diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;

DELIMITER $$

CREATE PROCEDURE VerificaClienteAtivo(
IN cliente VARCHAR(50), 
OUT SituacaoClienteString VARCHAR(50)
)
BEGIN  
DECLARE SituacaoClienteInt INT; 
SELECT `active` INTO SituacaoClienteInt
FROM customer
WHERE email = cliente;
CASE SituacaoClienteInt
	WHEN 1 THEN SET SituacaoClienteString = CONCAT("Cliente ",cliente , " Ativo");
    WHEN 0 THEN SET SituacaoClienteString = CONCAT("Cliente ",cliente, " Inativo");
    ELSE SET SituacaoClienteString = CONCAT("Cliente Não Encontrado");
END CASE;
END $$

DELIMITER ;

CALL VerificaClienteAtivo("PATRICIA.JOHNSON@sakilacustomer.org", @teste);
SELECT @teste