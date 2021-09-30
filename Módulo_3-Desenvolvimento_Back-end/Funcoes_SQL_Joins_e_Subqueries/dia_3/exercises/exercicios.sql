use BeeMovies;

DELIMITER $$
CREATE TRIGGER insertReleaseYearMovies
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END $$
CREATE TRIGGER insertMovieLogs
	BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'INSERT', NOW());
END $$

CREATE TRIGGER differenceUpdateValuePrice
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF(OLD.ticket_price > NEW.ticket_price, 'Decreasing', 'Increasing');
    INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'UPDATE', NOW());
END $$

CREATE TRIGGER setDeleteLog
	AFTER DELETE ON movies
    FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;

