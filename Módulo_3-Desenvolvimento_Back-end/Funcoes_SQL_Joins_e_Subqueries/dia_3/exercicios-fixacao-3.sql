use betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER insertDataUpdateCarros
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERT',
        NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;


DELIMITER $$
CREATE TRIGGER updateDataUpdateCarros
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'UPDATE';
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER deleteTriggerCarros
	AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES('DELETE', NOW());
END $$

DELIMITER ;