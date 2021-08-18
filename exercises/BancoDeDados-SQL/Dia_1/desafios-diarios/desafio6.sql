USE sakila;
#Para os exercícios a seguir, vamos usar a tabela sakila.film
#Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT title FROM film;
#Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação;
SELECT title, release_year, rating FROM film;
#Quantos filmes temos cadastrados?
SELECT COUNT(*) FROM film;