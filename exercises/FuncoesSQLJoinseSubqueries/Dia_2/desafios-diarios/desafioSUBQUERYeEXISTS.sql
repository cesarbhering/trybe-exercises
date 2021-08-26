USE hotel;
#Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT id, Title FROM Books as b
WHERE NOT EXISTS (
	SELECT * FROM Books_Lent as bl
    WHERE b.id = bl.book_id
);
#Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT id, Title FROM Books as b
WHERE EXISTS (
	SELECT * FROM Books_Lent as bl
    WHERE b.id = bl.book_id AND bl.returned = 0 AND b.Title LIKE "%lost%"
);
#Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT `Name` FROM Customers as c
WHERE NOT EXISTS (
	SELECT * FROM CarSales as cs
    WHERE c.CustomerId = cs.CustomerId
);
#Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , 
#exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT cars.`Name`, (SELECT `Name` FROM Customers WHERE Customers.CustomerId = cs.CustomerId) as Customer_Name FROM Cars as cars
LEFT JOIN CarSales as cs
ON cars.Id = cs.CarID
WHERE EXISTS (
	SELECT * FROM Customers as c
    WHERE c.CustomerId = cs.CustomerId
);

