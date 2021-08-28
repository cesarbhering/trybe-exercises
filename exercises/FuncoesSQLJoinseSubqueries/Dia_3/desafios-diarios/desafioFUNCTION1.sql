#Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;

DELIMITER $$
CREATE FUNCTION TotalDePagamentsoRealizadosPeloCLiente(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE PaymentQty INT;
    SELECT COUNT(*) FROM payment
    WHERE customer_id = id
    INTO PaymentQty;
    RETURN PaymentQty;
END $$

DELIMITER ;

SELECT TotalDePagamentsoRealizadosPeloCLiente(3)

