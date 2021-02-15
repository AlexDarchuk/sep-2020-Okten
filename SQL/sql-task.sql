1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.

	SELECT FirstName FROM client WHERE LENGTH(FirstName) < 6;

2. +Вибрати львівські відділення банку.+

	SELECT * FROM department WHERE DepartmentCity = 'Lviv';

3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.

	SELECT * FROM client WHERE Education = 'high' ORDER BY LastName;

4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.

	SELECT * FROM application ORDER BY Client_idClient DESC LIMIT 5 OFFSET 10;

5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.

	SELECT LastName FROM client WHERE LastName LIKE '%ov' OR LastName LIKE '%ova';

6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.

	SELECT LastName, DepartmentCity FROM client
    		JOIN department d on d.idDepartment = client.Department_idDepartment
    		WHERE DepartmentCity = 'Kyiv';

7. +Вивести імена клієнтів та їхні номера паспортів, погрупувавши їх за іменами.

	SELECT FirstName, Passport FROM client GROUP BY FirstName;

8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.

	SELECT * FROM client 
		JOIN application a on client.idClient = a.Client_idClient 
		WHERE Sum > 5000;
9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.

	SELECT COUNT(idClient) FROM client
	UNION
	SELECT COUNT(LastName) FROM client
    		JOIN department d on d.idDepartment = client.Department_idDepartment
    		WHERE d.DepartmentCity = 'Lviv';
10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.

	SELECT MAX(Sum), LastName, idClient FROM application
    		JOIN client c on c.idClient = application.Client_idClient
    		GROUP BY idClient;
11. Визначити кількість заявок на крдеит для кожного клієнта.

	SELECT COUNT(idApplication), LastName, idClient FROM application
    		JOIN client c on c.idClient = application.Client_idClient
    		GROUP BY idClient;

12. Визначити найбільший та найменший кредити.
	SELECT MAX(Sum) FROM application
		UNION
	SELECT MIN(Sum) FROM application;

13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.

	SELECT COUNT(sum)
	FROM application
         	JOIN client c ON c.idClient = application.Client_idClient
	WHERE Education = 'high';
14. Вивести дані про клієнта, в якого середня сума кредитів найвища.

	SELECT AVG(Sum) as maxSum, LastName
	FROM application
         	JOIN client c ON c.idClient = application.Client_idClient
	GROUP BY idClient
	ORDER BY maxSum DESC LIMIT 1;
15. Вивести відділення, яке видало в кредити найбільше грошей
	
	SELECT DepartmentCity, Sum(Sum) AS sumCity
	FROM department
         	JOIN client c ON department.idDepartment = c.Department_idDepartment
         	JOIN application a ON c.idClient = a.Client_idClient
	GROUP BY idDepartment
	ORDER BY sumCity DESC;
16. Вивести відділення, яке видало найбільший кредит.
	SELECT DepartmentCity, Max(Sum) FROM department
    		JOIN client c on department.idDepartment = c.Department_idDepartment
    		JOIN application a on c.idClient = a.Client_idClient;

17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
	UPDATE application 
		JOIN client c on c.idClient = application.Client_idClient 
		SET Sum = 6000 
		WHERE Education = 'high';

18. Усіх клієнтів київських відділень пересилити до Києва.
	UPDATE client
    		JOIN department d on d.idDepartment = client.Department_idDepartment
    		SET City = 'Kyiv'
    		WHERE DepartmentCity = 'Kyiv';

19. Видалити усі кредити, які є повернені.
	DELETE FROM application WHERE CreditState = 'Returned';

20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.

	DELETE application FROM application join client c on application.Client_idClient = c.idClient
		WHERE LastName LIKE '_a%'
		AND LastName LIKE '_e%'
		AND LastName LIKE '_i%'
		AND LastName LIKE '_o%'
		AND LastName LIKE '_u%'
		AND LastName LIKE '_y%';
21. Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000

	SELECT Sum(Sum) creditCity,idDepartment, DepartmentCity FROM department
    		JOIN client c on department.idDepartment = c.Department_idDepartment
    		JOIN application a on c.idClient = a.Client_idClient
	WHERE DepartmentCity = 'Lviv'
	GROUP BY idDepartment
	HAVING creditCity > 5000;
22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000

23./* Знайти максимальний неповернений кредит.*/

	SELECT Max(Sum) FROM application WHERE CreditState = 'Not returned';
24./*Знайти клієнта, сума кредиту якого найменша*/
	SELECT Min(Sum) minSum, LastName FROM client
    		JOIN application a on client.idClient = a.Client_idClient
	ORDER BY minSum;

25./*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/

SELECT Sum FROM application WHERE Sum > (SELECT AVG(Sum) FROM application);
