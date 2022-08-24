SELECT * FROM film;
SELECT * FROM language;

-- Task 1: Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = 2
WHERE replacement_cost < 15;

-- Task 2: Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

-- Task 3: We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- We should check as it has a CONSTRAINT delete cascade which could eventually delete over table linked to it.

-- Task 4: Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT * FROM rental
WHERE return_date ISNULL;

-- Task 5: Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT * FROM payment;
SELECT inventory.inventory_id, film.rental_rate,film.title 
FROM (rental JOIN inventory ON rental.inventory_id = inventory.inventory_id)
JOIN film ON inventory.film_id = film.film_id
WHERE return_date ISNULL  
ORDER BY film.rental_rate DESC
LIMIT 30;


-- Task 6: Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
