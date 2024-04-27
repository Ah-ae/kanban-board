create table users
(
	id bigint not null auto_increment,
	name varchar(255),
	avatar varchar(255),
	primary key (id)
) engine = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

create table tickets
(
  id bigint not null auto_increment,
  title varchar(255),
  description varchar(255),
  label varchar(255),
  number bigint,
  assignee bigint,
  states_id bigint,
  primary key (id)
) engine = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

create table states
(
  id bigint not null auto_increment,
  description varchar(255),
  primary key (id)
) engine = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;