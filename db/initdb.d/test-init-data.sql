INSERT INTO users(id, name, avatar)
VALUES (default, 'Iskra', '1'),
       (default, 'Arif', '2'),
       (default, 'John', '3'),
       (default, 'Justino', '4'),
       (default, 'Sylvianne', '5'),
       (default, 'Mark', '6'),
       (default, 'Amy', '7'),
       (default, 'Joyce', '8'),
       (default, 'Steph', '9'),
       (default, 'Timothy', '10');

insert into states(id, description)
values (default, 'TO DO'),
       (default, 'IN PROGRESS'),
       (default, 'CODE REVIEW'),
       (default, 'DONE');

insert into tickets(id, title, description, label, number, assignee, states_id)
values (default, 'Engage Jupiter Express for outer solar system travel', '', 1, 25, 3, 1),
       (default, 'Create 90 day plans for all departments in the Mars Office', '', 2, 12, null, 1),
       (default, "Engage Saturn's Rings Resort as a preferred provider", '', 1, 17, 7, 1),
       (default, 'Requesting available flights is now taking > 5 seconds', '', 3, 8, 6, 2),
       (default, 'Engage Saturn Shuttle Lines for group tours', '', 1, 15, 10, 2),
       (default, 'Register with the Mars Ministry of Revenue', '', 1, 11, null, 3),
       (default, 'Homepage footer uses an inline style - should use a class', '', 4, 68, 8, 4);