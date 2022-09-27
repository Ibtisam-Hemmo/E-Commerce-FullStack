BEGIN;
DROP TABLE IF EXISTS users, products, cart CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    img Text
);
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description Text NOT NULL,
    img TEXT,
    price INT ,
    category VARCHAR(255),
    user_id INT DEFAULT (1),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE cart(
    id SERIAL PRIMARY KEY,
    user_id INT,
    product_id INT,
    count INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

 insert into users (name,email, password , img ) values ('userName','user11@gmail.com','123456789','https://196034-584727-raikfcquaxqncofqfm.stackpath…oads/2019/07/Personal-Assistant-profile-photo.jpg'),
 ('userName','user@gmail.com','123456789','https://196034-584727-raikfcquaxqncofqfm.stackpath…oads/2019/07/Personal-Assistant-profile-photo.jpg');
-- INSERT INTO users (name, email, password, img) VALUES
-- ("name","userName@gmail.com","123456789","https://196034-584727-raikfcquaxqncofqfm.stackpath…oads/2019/07/Personal-Assistant-profile-photo.jpg");

INSERT INTO products(name, description, img, price, category, user_id) VALUES
('Midtown Dining Set','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/30884162/Tara-Pantry-23.75-W-x-15-D-x-67.75-H-13ee0613-545d-4f03-807f-0e5cd67d5da5_1000.jpg',100, 'Kitchen',1),
('Midtown Dining Set','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/30884162/Tara-Pantry-23.75-W-x-15-D-x-67.75-H-13ee0613-545d-4f03-807f-0e5cd67d5da5_1000.jpg',100, 'Kitchen',1)
;
INSERT INTO cart(user_id, product_id,count) VALUES
(1,2, 1),(2,2,2);

COMMIT;