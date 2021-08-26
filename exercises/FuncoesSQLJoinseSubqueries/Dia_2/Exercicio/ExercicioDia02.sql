USE Pixar;
#Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT m.title, bo.domestic_sales, bo.international_sales FROM Movies as m
INNER JOIN BoxOffice as bo
ON m.id = bo.movie_id;
#Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme 
#que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT m.title, bo.domestic_sales, bo.international_sales FROM Movies as m
INNER JOIN BoxOffice as bo
ON m.id = bo.movie_id
WHERE bo.domestic_sales < bo.international_sales;
#Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT m.Title, bo.rating
FROM Movies as m
INNER JOIN BoxOffice as bo
ON m.id = bo.movie_id
ORDER BY bo.rating DESC;
#Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, 
#adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM Theater as t
LEFT JOIN Movies as m
ON m.theater_id = t.id
ORDER BY t.`name` ASC;
#Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, 
#adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT * FROM Theater as t
RIGHT JOIN Movies as m
ON m.theater_id = t.id
ORDER BY t.`name`;
#Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , 
#que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT title, (SELECT rating FROM BoxOffice WHERE BoxOffice.movie_id = Pixar.Movies.id AND rating > 7.5) AS Rating FROM Movies;
SELECT m.title, bo.rating
FROM Movies as m
INNER JOIN BoxOffice as bo
ON m.id = bo.movie_id;
#Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT title, 
(SELECT rating FROM BoxOffice WHERE BoxOffice.movie_id = Pixar.Movies.id) 
AS Rating FROM Movies
WHERE year > 2009;
--
SELECT m.title, bo.rating
FROM Movies as m
INNER JOIN BoxOffice as bo
ON m.id = bo.movie_id
WHERE m.year > 2009;
#Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT * FROM Theater AS t
WHERE EXISTS (
	SELECT * FROM Movies
    WHERE theater_id = t.id 
);
#Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT * FROM Theater AS t
WHERE NOT EXISTS (
	SELECT * FROM Movies
    WHERE theater_id = t.id 
);
