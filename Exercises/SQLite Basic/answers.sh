1- SELECT name 
    FROM students;
2- SELECT * 
	FROM students 
	WHERE age > 30;
3- SELECT name 
	FROM students
	WHERE age >=30 AND gender = 'F';
4- SELECT points 
	FROM students
	WHERE name LIKE "ALEX";
5- INSERT INTO students
    VALUES ('8', 'Ahmed', '29', 'M', '500');
6- UPDATE students 
	SET points = '350'
	WHERE name = 'Basma';
7- UPDATE students 
	SET points = '150'
	WHERE name = 'Alex';
