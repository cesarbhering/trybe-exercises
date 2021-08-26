USE sakila;
#Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT f1.film_id, f1.replacement_cost, f2.film_id, f2.replacement_cost
FROM film as f1, film as f2
WHERE f1.replacement_cost = f2.replacement_cost;
#Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT f1.title, f1.rental_duration, f2.title, f2.rental_duration
FROM film as f1, film as f2
WHERE f1.rental_duration = f2.rental_duration AND f1.rental_duration IN (2, 3, 4);