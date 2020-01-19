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

/*JOINS*/
1- SELECT emp.Name, emp.Company, comp.Date 
	FROM employees as emp
	JOIN companies as comp
	ON emp.Company = comp.Name;
2- SELECT emp.Name
	FROM employees as emp
	JOIN companies as comp
	ON emp.Company = comp.Name 
	WHERE comp.date < "2000";
3- SELECT emp.Company
	FROM employees as emp
	JOIN companies as comp
	ON emp.Company = comp.Name
	WHERE emp.role Like "Graphic Designer";

/*COUNT and FILTER*/
1- SELECT name, MAX(points) as highest
	FROM students;
2- SELECT AVG(points) as avg
	FROM students;
3- SELECT COUNT(ID) as count
	FROM students
	WHERE points = "500";
4- SELECT name as sname
	FROM students
	WHERE name LIKE "500";
5- SELECT name, points
	FROM students
	ORDER BY points DESC;
	