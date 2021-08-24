USE sakila;
#Insira um novo funcionário na tabela sakila.staff;
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username)
VALUES('Cesar', 'Bhering', 3, 2, 1, 'cesarbhc');
#Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username)
VALUES
('Oseas', 'Da Bahia', 2, 1, 1, 'oseinha'),
('Paulo', 'Rink', 1, 2, 0, 'goleador');
#Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;
#Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO category (name) VALUES
('Anime'),
('Cringe'),
('Nacional');
#Cadastre uma nova loja na tabela sakila.store.
INSERT INTO store (manager_staff_id, address_id) VALUES
(3,3);