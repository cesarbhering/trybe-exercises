#Monte uma query que exiba seu nome na tela;
SELECT 'Cesar';
#Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Cesar Bhering', 'SJDR', '35';
#Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS.
SELECT 'Cesar' as nome, 'Bhering' as sobrenome, 'SJDR' as 'Cidade Natal', '35' as Idade;
#Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
SELECT 13 * 8;
#Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual";
SELECT now() as 'Data Atual';