#Crie uma function que receba uma determinada categoria de filme em formato de texto 
#(ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;

DELIMITER $$
CREATE FUNCTION NumeroFilmesPorCategoria(categoria VARCHAR(50))
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
DECLARE CategoriaARetornar VARCHAR(50);
SELECT COUNT(*) 
FROM film_category AS fc
INNER JOIN category AS c
ON fc.category_id = c.category_id
WHERE c.`name` = categoria
INTO CategoriaARetornar;
RETURN CategoriaARetornar;
END $$

DELIMITER ;

SELECT NumeroFilmesPorCategoria("Children");