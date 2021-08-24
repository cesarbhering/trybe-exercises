USE sakila;
#Exclua do banco de dados o ator com o nome de "KARL".
DELETE FROM film_actor
WHERE actor_id = 12;
DELETE FROM actor 
WHERE first_name = "KARL";
#Exclua do banco de dados os atores com o nome de "MATTHEW".
DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);
DELETE FROM actor
WHERE first_name = "MATTHEW";
#Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
TRUNCATE film_actor;
TRUNCATE film_category;