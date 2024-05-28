create database car_show;

\c car_show ;

create table admin(
    id_admin serial primary key,
    name varchar(100),
    email varchar(100),
    password varchar(50)
);

create table car(
    id_car serial primary key,
    car_name varchar(50),
    model varchar(80),
    price float,
    color varchar(20),
    motor_type varchar(100),
    power varchar(100),
    place_number int,
    status varchar(100),
    type_car varchar(100)
);

create table image(
    url varchar(200),
    id_car int references car(id_car)
);

create table appointement(
    name  varchar(100),
    first_name varchar(100),
    email varchar(100),
    contact varchar(20),
    message text,
    appointement_date timestamp,
    status varchar(100),
    id_car int references car(id_car)
);