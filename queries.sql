-- Read data

SELECT Country, City, SupplierName
FROM Suppliers
WHERE Country = 'USA';

SELECT Country, City, CustomerName, ContactName
FROM Customers
WHERE Country = 'USA' or City = "Paris"
ORDER BY COUNTRY DESC;

SELECT Country, City, CustomerName, ContactName
FROM Customers
WHERE Country = 'USA' or City = "Paris"
ORDER BY COUNTRY, City DESC;

SELECT * 
FROM [Products]
WHERE Price > 25
ORDER BY Price DESC
LIMIT 5;  -- show me the first 5



-- Add data

INSERT INTO [Shippers] (ShipperName, Phone)
VALUES ('Lambda Shipping', '(555) 555-1234');



-- Update data

UPDATE [Shippers]
SET Phone = '(505) 555-2345' -- DANGER, DANGER, DANGER, IF NO 'WHERE' CLAUSE, ALL RECORDS AFFECTED!
WHERE ShipperID = 4;



-- delete data

DELETE FROM Shippers
WHERE ShipperID = 4; 