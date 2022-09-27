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

('Midtown Dining Set','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/30884162/Tara-Pantry-23.75-W-x-15-D-x-67.75-H-13ee0613-545d-4f03-807f-0e5cd67d5da5_1000.jpg',100, 'Kitchen',1),

('gress chair','Data Chair is a system of chairs that can be assembled on different base typologies: sled, four legs, central support with or without wheels. Because of the Data Chair many configurations, its solid build and its lightweight appearance, it is a project with appeal unrivaled for furnishing collective spaces, public spaces, work places and homes.',
'https://m.media-amazon.com/images/I/91C6rnYVi-L._AC_SL1500_.jpg', 70,'chair',1),

('Taypy chair','With a serene, light and subtle character, the Stamp collection brings an air of differentiation, authenticity and originality to architectural and interior design projects.The collection is a complete family of upholstered seats, composed of chairs, armchairs and stools that blend in naturally in public, professional and residential surroundings. Clean-lined, contemporary and timeless pieces that infuse a sophisticated mood in the places they inhabit. Creating visual levity. Its elegant and austere outline embraces an elaborate interior with a soft upholstery that invites the body to relax and put the mind to work.',
'https://www.cultfurniture.com/images/deluxe-high-back-office-chair-vintage-tan-p5152-2728553_image.jpg',70,'chiar',1),

('Acato chair','The new Billa Chair is a spontaneous evolution of the lounge model. The same materials, with the Nordic atmosphere given by the warmth of beech plywood combined with the elegance of the elliptical tube, now enhance new proportions to complete a collection both original and trendy.','https://d1k47ujo4hlhfb.cloudfront.net/catalog/product/a/r/arc_visitor.jpg',7,'chair',1),

('Segis chair','A classic functional club chair for commercial or residential use. The international design is suitable for the most discriminate environment. Available with a powder coated or chromed frame and cold-injected polyurethane foam upholstered in a wide range of materials.','https://www.shackletonsltd.co.uk/wp-content/uploads/2020/07/Loreto-Arm-Chair-v2.jpg',10,'chair',1),

('gold chair','Award winning stacking chair with the simplicity of form and function essential for any environment. Aluminum, anodized or powder coated; seat and back in recyclable polypropylene. The chair is perfect for indoor or outdoor.','https://c8.alamy.com/comp/MD1KG5/old-chair-on-a-brown-wall-background-MD1KG5.jpg',5,'chair',1),

('Gray chair','Award winning stacking chair with the simplicity of form and function essential for any environment. Aluminum, anodized or powder coated; seat and back in recyclable polypropylene. The chair is perfect for indoor or outdoor.','https://i.pinimg.com/originals/2c/3c/28/2c3c284ad05a23bc4fc61a9ee71a165e.jpg',8,'chair',1),

('Garden chair','With a serene, light and subtle character, the Stamp collection brings an air of differentiation, authenticity and originality to architectural and interior design projects.The collection is a complete family of upholstered seats, composed of chairs, armchairs and stools that blend in naturally in public, professional and residential surroundings. Clean-lined, contemporary and timeless pieces that infuse a sophisticated mood in the places they inhabit. Creating visual levity. Its elegant and austere outline embraces an elaborate interior with a soft upholstery that invites the body to relax and put the mind to work. Conversations flow wrapped in the fusion of aesthetics and comfort. Greater versatility using fewer materials.','https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',9,'chair',1),

('Bonta chair','Award winning stacking chair with the simplicity of form and function essential for any environment. Aluminum, anodized or powder coated; seat and back in recyclable polypropylene. The chair is perfect for indoor or outdoor.','https://image.shutterstock.com/image-photo/vintage-armchair-on-dark-background-600w-1087425731.jpg',62,'chair',1)
;

INSERT INTO cart(user_id, product_id,count) VALUES
(1,2, 1),(2,2,2);

COMMIT;