USE sakila;
#Para os exercícios a seguir, vamos usar a tabela sakila.actor
#Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT last_name FROM actor;
#Quantos sobrenomes únicos temos na tabela?
SELECT COUNT(DISTINCT last_name) FROM actor;
#Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT * FROM actor
ORDER BY last_name ASC, first_name DESC;
#Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english 
SELECT * FROM language WHERE name != 'english';
#Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . 
#Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, length, rating, replacement_cost FROM film
ORDER BY length DESC, replacement_cost ASC LIMIT 20; #Porque o LIMIT deve ficar após o ORDER ? o LIMIT sempre fica por último ?