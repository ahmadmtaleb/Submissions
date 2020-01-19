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
/* Creating table*/
1- CREATE TABLE Graduates (
	ID INTEGER NOT NULL, 
	Name TEXT NOT NULL UNIQUE,
	Age INTEGER,
	Gender TEXT,
	Points INTEGER,
	Graduation TEXT,
	PRIMARY KEY(ID)
);
2- INSERT INTO Graduates (name, age, gender, points)
	SELECT name, age, gender, points 
	FROM students
	WHERE name = "Layal";
3- UPDATE Graduates
	SET Graduation = "08/09/2018"
	WHERE Name = "Layal";
4- DELETE FROM students
	WHERE name = "Layal";
