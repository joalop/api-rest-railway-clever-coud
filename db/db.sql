drop database if exists userdb;
create database userdb charset utf8mb4;
use userdb;


create table users(
    id int primary key auto_increment,
    name varchar(255) not null
);