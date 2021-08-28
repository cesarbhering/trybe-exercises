USE sakila;
#Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e,
#quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
DELIMITER $$
CREATE PROCEDURE Exibe10AtoresMaisFamosos()
BEGIN
	SELECT actor_id, COUNT(actor_id) FROM film_actor
    GROUP BY actor_id
    ORDER BY COUNT(actor_id) DESC
    LIMIT 10;
END $$;
DELIMITER ;
CALL Exibe10AtoresMaisFamosos();