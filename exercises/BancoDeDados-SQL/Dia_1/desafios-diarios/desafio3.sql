USE sakila;
#Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme;
SELECT CONCAT(title, ' ', release_year) as 'Lançamento do Filme' FROM film;
#Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação;
SELECT CONCAT(title, ' ', rating) as 'Classificação' FROM film;
#Na tabela sakila.address , monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço;
SELECT CONCAT(address, ' ', district) as 'Endereço' FROM address; 