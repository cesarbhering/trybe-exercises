USE hr;
#1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) FROM employees;
#2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary) AS diferenca FROM employees;
#3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT JOB_ID, AVG(salary) FROM employees
GROUP BY JOB_ID
ORDER BY AVG(salary) ASC;
#4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) AS total_money_needed FROM employees;
#5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. 
#Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT ROUND(MAX(salary), 2), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) FROM employees;
#6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT COUNT(JOB_ID) AS total_IT_employees FROM employees
WHERE JOB_ID = "IT_PROG";
#7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT JOB_ID, ROUND(AVG(salary), 2) FROM employees
GROUP BY JOB_ID;
#8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para 
#cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, ROUND(AVG(salary), 2) FROM employees
WHERE JOB_ID = "IT_PROG";
#9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, ROUND(AVG(salary), 2) FROM employees
WHERE JOB_ID != "IT_PROG"
GROUP BY JOB_ID
ORDER BY AVG(salary) DESC;
#10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. 
#Dica: agrupe pelo department_id .
SELECT DEPARTMENT_ID, COUNT(DEPARTMENT_ID) AS employee_count , ROUND(AVG(salary), 2) FROM employees
GROUP BY DEPARTMENT_ID;
#11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
UPDATE employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, "515", "777")
WHERE PHONE_NUMBER LIKE "515%";
#12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT first_name FROM employees
WHERE LENGTH(first_name) >= 8;
#13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT employee_id, first_name, YEAR(hire_date) FROM employees;
#14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT employee_id, first_name, DAY(hire_date) FROM employees;
#15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT employee_id, first_name, MONTH(hire_date) FROM employees;
#16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UPPER(CONCAT(first_name, " ", last_name)) FROM employees;
#17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT last_name, hire_date from employees
WHERE hire_date LIKE "1987-07-__";
#18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT CONCAT(first_name, " ", last_name), DATEDIFF(NOW(), hire_date) FROM employees;