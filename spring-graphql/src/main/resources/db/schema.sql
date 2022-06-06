create table if not exists `users`(
    id bigint not null auto_increment,
    username VARCHAR(50) not null,
    first_name VARCHAR(50) not null,
    last_name VARCHAR(50) not null,
    primary key (id)
);

create table if not exists `tweets`(
    id bigint not null auto_increment,
    `text` VARCHAR(200) not null,
    user_id bigint not null,
    primary key (id)
);
