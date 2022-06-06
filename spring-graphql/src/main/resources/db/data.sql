insert into `users` (id, username, first_name, last_name)
values (1001, 'devwithpug', 'pug', 'gg'),
       (1002, 'foobar', 'Jungyu', 'Choi');

insert into `tweets` (id, text, user_id)
values (5001, 'foo', 1002),
       (5002, 'bar', 1001),
       (5003, 'hello', 1002),
       (5004, 'world', 1001);
