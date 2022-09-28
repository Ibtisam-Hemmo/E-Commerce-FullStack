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
 
INSERT INTO products(name, description, img, price, category, user_id) VALUES
('Midtown Dining Set','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/30884162/Tara-Pantry-23.75-W-x-15-D-x-67.75-H-13ee0613-545d-4f03-807f-0e5cd67d5da5_1000.jpg',100, 'Kitchen',1),

('Space Saving Shapes','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/wp-content/uploads/2019/03/031519-Small-Kitchen-and-Dining-Tables-and-Chairs-Small-Spaces-Tall-Tables.jpg',100, 'Kitchen',1),

('gress chair','Data Chair is a system of chairs that can be assembled on different base typologies: sled, four legs, central support with or without wheels. Because of the Data Chair many configurations, its solid build and its lightweight appearance, it is a project with appeal unrivaled for furnishing collective spaces, public spaces, work places and homes.',
'https://m.media-amazon.com/images/I/91C6rnYVi-L._AC_SL1500_.jpg', 70,'chair',1),

('Taypy chair','With a serene, light and subtle character, the Stamp collection brings an air of differentiation, authenticity and originality to architectural and interior design projects.The collection is a complete family of upholstered seats, composed of chairs, armchairs and stools that blend in naturally in public, professional and residential surroundings. Clean-lined, contemporary and timeless pieces that infuse a sophisticated mood in the places they inhabit. Creating visual levity. Its elegant and austere outline embraces an elaborate interior with a soft upholstery that invites the body to relax and put the mind to work.',
'https://www.cultfurniture.com/images/deluxe-high-back-office-chair-vintage-tan-p5152-2728553_image.jpg',70,'chiar',1),

('Acato chair','The new Billa Chair is a spontaneous evolution of the lounge model. The same materials, with the Nordic atmosphere given by the warmth of beech plywood combined with the elegance of the elliptical tube, now enhance new proportions to complete a collection both original and trendy.','https://d1k47ujo4hlhfb.cloudfront.net/catalog/product/a/r/arc_visitor.jpg',20,'chair',1),
('Ranges & Ovens','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-PopCat_7.jpg',90, 'Kitchen',1),
('Cookware','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_KITCHEN_PopCat_3.jpg',41, 'Kitchen',1),
('Table Linens & Decor - Overstock','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_7_TableLinensandDecor.jpg',50, 'Kitchen',1),
('Kitchen Electric Ice Maker ','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/img/mxc/03232020-gnp-kitchendining-PopCat_8.jpg',90, 'Kitchen',1),
('Bar','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/img/mxc/07062022_SUMMER_Kitchen_688x444_BG01.jpg',100, 'Kitchen',1),
('Glasses & Barware','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/img/mxc/12202021_WINTER2022_KITCHEN_PopCat_8_GlassesandBarware.jpg',50, 'Kitchen',1),
('Chair','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://i.pinimg.com/564x/fe/a4/bc/fea4bc6cf91b5868621b176e457f51d8.jpg',30, 'chair',1),
('Midtown Dining Set','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/direct/318e9b9539bb07557dc49d2586a11f7b72ae7093/Urban-Elements-Nordic-7-Piece-Dining-Set---With-Cushions.jpg',70, 'Kitchen',1),
('Wood Room Divider','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/direct/2e6b4e3022cdf9ced8cf04b1286c18bf34084baa/HOMCOM-Blinds-Style-4-Panel-Wood-Room-Divider%2C-67%27%27-Tall-Folding-Privacy-Screen-Panels-Gray.jpg',50, 'table',1),
('Media Dresser and Desk Combo','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/direct/fa3184f22a2cd6837ddd2334502f957f464ed34f/Novogratz-Kelly-3-in-1-Media-Dresser-and-Desk-Combo.jpg',70, 'Table',1),
('Handmade Natural Fiber Rug','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/direct/a2788a9ebf37123549881d7e81cbe725cd0f6201/TUHOME-Bar-Cart.jpg',50, 'Table',1),
('Writing Desk','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/direct/2089579d179583e71c1e93b279ceb0a7e10b5ad6/Peninah-Mid-Century-Faux-Rubberwood-Writing-Desk-by-Christopher-Knight-Home.jpg?imwidth=480&impolicy=medium',30, 'table',1),

('L-Shaped Desk with Storage','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/direct/a3911c875f91c495748f7f15d1c47f34dd58368c/Reversible-Industrial-L-Shaped-Desk-with-Storage-Shelves.jpg?imwidth=480&impolicy=medium',30, 'table',1),
('L-Shaped Desk','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…by-Bush-Furniture.jpg?imwidth=480&impolicy=medium',30 'table',1),
('Computer Desk','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…ner-Computer-Desk.jpg?imwidth=480&impolicy=medium',20, 'table',1),
('Bookcase set','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…by-Bush-Furniture.jpg?imwidth=480&impolicy=medium',65, 'table',1),
('L-Shaped Desk with corner','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','	https://ak1.ostkcdn.com/images/products/is/images/…ner-Computer-Desk.jpg?imwidth=480&impolicy=medium',45, 'table',1),
('Computer Desk','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…by-Bush-Furniture.jpg?imwidth=480&impolicy=medium',90, 'table',1),
('Porch & Den Lincoln Corner Desk','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…ncoln-Corner-Desk.jpg?imwidth=480&impolicy=medium',55, 'table',1),

('Living Room Sofa','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…opher-Knight-Home.jpg?imwidth=480&impolicy=medium',99, 'Sofa',1),
('White Living Room Sofa','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…opher-Knight-Home.jpg?imwidth=480&impolicy=medium',100, 'Sofa',1),
('Grey Living Room Sofa','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…-Sofa%2C-3-Seater.jpg?imwidth=480&impolicy=medium',100, 'Sofa',1),
('Blue Living Room Sofa','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…opher-Knight-Home.jpg?imwidth=480&impolicy=medium',100, 'Sofa',1),
('Corner Living Room Sofa','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…Sofa-and-Ottomans.jpg?imwidth=480&impolicy=medium',99, 'Sofa',1),
('5-piece Sofa','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…opher-Knight-Home.jpg?imwidth=480&impolicy=medium',89, 'Sofa',1),
('wood Accent Chair','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…wood-Accent-Chair.jpg?imwidth=480&impolicy=medium',45, 'Chair',1),
('Wood Chair','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…opher-Knight-Home.jpg?imwidth=480&impolicy=medium',50, 'Chair',1),
('Bag Chair','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…C-Multiple-Colors.jpg?imwidth=480&impolicy=medium',65, 'Chair',1),

('Wood Home Deak','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…Table-Workstation.jpg?imwidth=480&impolicy=medium',79, 'table',1),
('White X-frame Computer Desk','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…sk-with-Glass-Top.jpg?imwidth=480&impolicy=medium',65, 'table',1),
('Home Office Desk','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…udy-Writing-Table.jpg?imwidth=480&impolicy=medium',53, 'table',1),
('Frame Desk','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…Ladder-Shelf-Desk.jpg?imwidth=480&impolicy=medium',35, 'table',1),
('Pink Living Room Sofa','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/22893524/D…5e1b82609e00_1000.jpg?imwidth=480&impolicy=medium',69, 'Sofa',1),
('Grey Contemporary Sofa','Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturanimi ut laborum illo quaerat','https://ak1.ostkcdn.com/images/products/is/images/…ey-Sectional-Sofa.jpg?imwidth=480&impolicy=medium',75, 'Sofa',1)
;
	
INSERT INTO cart(user_id, product_id,count) VALUES
(1,2, 1),(2,2,2);

COMMIT;