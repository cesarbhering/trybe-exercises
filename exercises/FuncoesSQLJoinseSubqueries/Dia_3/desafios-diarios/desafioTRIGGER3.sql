#Crie um TRIGGER que, a cada exclusão feita na tabela carros , 
#envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER delete_carro
AFTER DELETE ON carros
FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ("EXCLUSÃO", NOW());
END $$

DELIMITER ;

DELETE FROM carros WHERE id_carro = 1;