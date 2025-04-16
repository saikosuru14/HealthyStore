CREATE DATABASE healthystore;

postgres=# \c healthystore
You are now connected to database "healthystore" as user "postgres".

healthystore=# create table oils(id int primary key,image varchar,name varchar,price integer);
CREATE TABLE

healthystore=# INSERT INTO oils VALUES(1,'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTJ-yFvc6_-zO9zFzKtsCQ20JjP7SarS7dgWKa6i7--1W9jWSoALXjzgPoQGLzCCTm0wFJZGElF4g&usqp=CAc','Groundnut oil',600);
INSERT 0 1
healthystore=# SELECT * FROM oils;
 id |                                                                     image                                                                     |     name      | price
----+-----------------------------------------------------------------------------------------------------------------------------------------------+---------------+-------
  1 | https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTJ-yFvc6_-zO9zFzKtsCQ20JjP7SarS7dgWKa6i7--1W9jWSoALXjzgPoQGLzCCTm0wFJZGElF4g&usqp=CAc | Groundnut oil |   600
(1 row)


healthystore=# INSERT INTO oils VALUES(2,'https://m.media-amazon.com/images/I/61vZwYEhuUL._SX522_.jpg','Olive oil',700);
INSERT 0 1

___________________________________________________________________________________________________________________________________________________________

healthystore=# create table cart(id int primary key,image varchar,name varchar,price integer,quantity int);
CREATE TABLE



healthystore=# select * from cart;
 id |                                                              image                                                              |    name     | price
----+---------------------------------------------------------------------------------------------------------------------------------+-------------+-------
  5 | https://cdn.shopify.com/s/files/1/0523/3252/7770/products/6jyi1g2qnZ_8eda0938-ae46-4c17-b52d-36d0471e1e21_600x.jpg?v=1650467045 | Peanuts Oil |   500
(1 row)

___________________________________________________________________________________________________________________________________________________________________________

healthystore=# create table users(username varchar primary key,email varchar,password varchar);
CREATE TABLE


healthystore=# select * from users;
 username |     email     | password
----------+---------------+----------
 sai      | sai@gmail.com | Sai@1234
(1 row)

