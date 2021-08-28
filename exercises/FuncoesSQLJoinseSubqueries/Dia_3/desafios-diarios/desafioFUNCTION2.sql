#Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$
CREATE FUNCTION InformaFilme(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
	DECLARE NomeFilme VARCHAR(200);
    SELECT f.title
    FROM film AS f
    INNER JOIN inventory AS i
    ON f.film_id = i.film_id
    WHERE i.inventory_id = id
    INTO NomeFilme;
    RETURN NomeFilme;
END $$

DELIMITER ;

SELECT InformaFilme(20)