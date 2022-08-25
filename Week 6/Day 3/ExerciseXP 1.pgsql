-- ExerciseXP

-- Task 1: Get a list of all film languages.
SELECT DISTINCT * FROM  language;

-- Task 2: Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.

SELECT film.title, film.description, language.name  
FROM film
JOIN language
ON language.language_id = film.language_id;

SELECT film.title, film.description, language.name  
FROM film
FULL JOIN language
ON language.language_id = film.language_id;

-- Task 3: Create a new table called new_film with the following columns : id, name. Add some new films to the table.

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200)
);

DELETE FROM new_film;
DROP TABLE new_film;

ALTER TABLE new_film
ADD PRIMARY KEY (id); 

INSERT INTO new_film(name)
VALUES ('Spiderman:Far From Home'),
       ('THOR:Love and Thunder'),
       ('One Piece Film: Red'),
       ('Firestarter'),
       ('The Lost City');


SELECT * FROM new_film;

-- Task 4: Create a new table called customer_review, which will contain film reviews that customers will make.
-- 1: Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- 2: It should have the following columns:
-- 3: review_id – a primary key, non null, auto-increment.
-- 4: film_id – references the new_film table. The film that is being reviewed.
-- 5: language_id – references the language table. What language the review is in.
-- 6: title – the title of the review.
-- 7: score – the rating of the review (1-10).
-- 8: review_text – the text of the review. No limit on the length.
-- 9: last_update – when the review was last updated.

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT,
    language_id INT,
    title VARCHAR(150),
    score numeric(2,1),
    review_text TEXT,
    last_update DATE,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);
DROP TABLE customer_review;

INSERT INTO customer_review (film_id,language_id,title,score,review_text,last_update)
VALUES (1,1,'Best Film Ever',8.5,'The plot twists were fantastic, on top of that it clearly show the whim of youngster nowadays', '15/01/2022'),
       (3,1,'One piece forever',9.0,'If you are looking for a great use of your time then One piece red is the way to go.','10/08/2022');


SELECT * FROM customer_review;

DELETE FROM new_film
WHERE name = 'Spiderman:Far From Home';

DROP TABLE customer_review;