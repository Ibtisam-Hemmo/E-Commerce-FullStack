BEGIN;
DROP TABLE IF EXISTS users, products, cart CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
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
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);


COMMIT;