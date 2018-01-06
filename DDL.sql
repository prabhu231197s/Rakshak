create table centres(
`id` int(255) not null primary key auto_increment,
`name` varchar(500) unique not null
);

create table commodities(
`id` int(255) not null primary key auto_increment,
`name` varchar(500) unique not null
);



select * from centres;

select * from commodities;