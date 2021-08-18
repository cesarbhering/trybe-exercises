USE sakila;
#Essa é a tabela staff do banco de dados sakila . Como você poderia responder às seguintes questões?
#Quantas senhas temos cadastradas nessa tabela?
SELECT COUNT(password) FROM staff;
#Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(staff_id) FROM staff;
#Quantos emails temos cadastrados nessa tabela?
SELECT COUNT(email) FROM staff;