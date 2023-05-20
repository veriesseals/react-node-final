-- Customer
INSERT INTO customer (fName, lName)
VALUES ('George', 'Jefferson');

INSERT INTO customer (fName, lName)
VALUES ('Mike', 'Jones');

-- Add Item
INSERT INTO item (item, category, price, image)
VALUES ('Steak', 'Main Course', 12.00, 'URL GOES HERE');

-- Add Total
INSERT INTO total (total)
VALUES (13.90);


-- Update Item
UPDATE item
SET item = 'Ribeye'
WHERE item_id = 1;

UPDATE item
SET category = 'Main Course', price = 12.00
WHERE item_id = 1;

-- Update customer
UPDATE customer
SET fName = 'Will', lName = 'Smith'
WHERE customer_id = 2;

UPDATE customer
SET fName = 'Taylor', lName = 'Swift'
WHERE customer_id = 2;

UPDATE customer
SET fName = 'John', lName = 'Sanford'
WHERE customer_id = 3;

UPDATE meal
SET fName = 'George', lName = 'Jefferson'
WHERE customer_id = 1;

UPDATE meal
SET fName = 'Taylor', lName = 'Swift'
WHERE meal_id = 2;

-- See values of tables
SELECT * FROM tableName;

-- Delete a row
DELETE FROM meal
WHERE meal_id = 2;

-- Update meal
UPDATE meal
SET meal_id = 2
WHERE meal_id = 3;

INSERT INTO subtotal (subtotal)
VALUES (39.99);

-- Test Item
INSERT INTO item (item, category, price, image)
VALUES ('RibSteak', 'Main Course', 12.00, 'URL GOES HERE');

-- Test Meal 
INSERT INTO meal (fName, lName, item, subtotal, tax, total, image)
VALUES ('Mike', 'Jones', 'Flank Steak', 8.99, .07, 9.62, 'https://www.simplyrecipes.com/thmb/YqMZwpTigTy9NVu3xsgKvbxVza8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply_Recipes_How_To_Flank_Steak_SEO-1-efe0682b762649d79ac8a0602586f07c.jpg');


INSERT INTO meal (fName, lName, item, subtotal, tax, total, image)
VALUES ('Taylor', 'Slow', 'Tomahawk Steak', 39.99, .07, 42.79, 'https://theartoffoodandwine.com/wp-content/uploads/2021/06/Tomahawk-closer-shinier.jpg');

-- Favorite Steak Query
INSERT INTO favSteak (fName, lName, email, restuarant, steak, image)
VALUES ('Taylor', 'Slow', 'taylor@gmail.com', 'Mortons The Steakhouse','Tomahawk Steak','https://theartoffoodandwine.com/wp-content/uploads/2021/06/Tomahawk-closer-shinier.jpg');

INSERT INTO favSteak (fName, lName, email, restuarant, steak, image)
VALUES ('Redd', 'Foxx', 'rfoxx@gmail.com', 'Baires Grill Las Olas','Flank Steak','https://www.closetcooking.com/wp-content/uploads/2020/05/Korean-Style-Grilled-Flank-Steak-1200-5767.jpg');

INSERT INTO favSteak (fName, lName, email, restuarant, steak, image)
VALUES ('Denzel', 'Washington', 'denzelwashington@gmail.com', 'Ruths Chris Steakhouse','Ribeye Steak','https://olo-images-live.imgix.net/c0/c023a1e9f23b4403a555af31bf707395.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=44819c01a619faa7e43e19ad6558c83a');

-- Update meal
UPDATE favSteak
SET steak = 'Ribeye Steak'
WHERE favSteak_id = 3;

-- Item
INSERT INTO item (item, category, price, image)
VALUES ('Ribeye Steak', 'Main Course', 12.99, 'https://olo-images-live.imgix.net/c0/c023a1e9f23b4403a555af31bf707395.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=44819c01a619faa7e43e19ad6558c83a');