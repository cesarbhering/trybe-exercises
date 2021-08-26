USE Pixar;
#A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT AVG(length_minutes) FROM Movies;
#A duração mínima dos filmes como 'Duração Mínima';
SELECT MIN(length_minutes) AS "Duração Mínima" FROM Movies;
#A duração máxima dos filmes como 'Duração Máxima';
SELECT MAX(length_minutes) AS "Duração Máxima" FROM Movies;
#A soma de todas as durações como 'Tempo de Exibição Total';
SELECT SUM(length_minutes) AS "Tempo de Exibição Total" FROM Movies;
#E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(length_minutes) AS "Filmes Registrados" FROM Movies;
