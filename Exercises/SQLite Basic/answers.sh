"SELECT name 
    FROM students;"
"SELECT * 
	FROM students 
	WHERE age > 30;"
"SELECT name 
	FROM students
	WHERE age >=30 AND gender = 'F';"
"SELECT points 
	FROM students
	WHERE name LIKE "ALEX";"
"INSERT INTO students
    VALUES ('8', 'Ahmed', '29', 'M', '500');"
"UPDATE students 
	SET points = '350'
	WHERE name = 'Basma';"
"UPDATE students 
	SET points = '150'
	WHERE name = 'Alex';"
"CREATE TABLE Graduates (
	ID INTEGER NOT NULL, 
	Name TEXT NOT NULL UNIQUE,
	Age INTEGER,
	Gender TEXT,
	Points INTEGER,
	Graduation TEXT,
	PRIMARY KEY(ID)
);"
"INSERT INTO Graduates (name, age, gender, points)
	SELECT name, age, gender, points 
	FROM students
	WHERE name = "Layal";"
"UPDATE Graduates
	SET Graduation = "08/09/2018"
	WHERE Name = "Layal";"
"DELETE FROM students
	WHERE name = "Layal";"

"SELECT emp.Name, emp.Company, comp.Date 
	FROM employees as emp
	JOIN companies as comp
	ON emp.Company = comp.Name;"
"SELECT emp.Name
	FROM employees as emp
	JOIN companies as comp
	ON emp.Company = comp.Name 
	WHERE comp.date < "2000";"
"SELECT emp.Company
	FROM employees as emp
	JOIN companies as comp
	ON emp.Company = comp.Name
	WHERE emp.role Like "Graphic Designer";"

"SELECT name, MAX(points) as highest
	FROM students;"
"SELECT AVG(points) as avg
	FROM students;"
"SELECT COUNT(ID) as count
	FROM students
	WHERE points = "500";"
"SELECT name as sname
	FROM students
	WHERE name LIKE "%s%";"
"SELECT name, points
	FROM students
	ORDER BY points DESC;"
	