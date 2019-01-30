use sakila

select first_name, last_name
from actor;

select upper(concat(first_name, ' ', last_name))
as 'Actor Name'
from actor;

select actor_id, first_name, last_name
from actor
where first_name = 'Joe';

select first_name , last_name
from actor
where last_name like '%GEN%';

select last_name, first_name 
from actor
where last_name like '%LI%'
order by last_name, first_name;

select country_id, country
from country
where country in ('Afghanistan', 'Bangladesh', 'China');

alter table actor
add column description BLOB;

alter table actor
drop column description;

select last_name, count(last_name)
as 'Similar last names'
from actor
group by last_name
having count(last_name) > 1;

update actor
set first_name = 'HARPO'
where first_name = 'GROUCHO' and last_name = 'WILLIAMS';

update actor
set first_name = 'CROUCHO'
where first_name = 'HARPO';

show create table address

create table if not exists address (
'address_id' smallint(5) unsigned not null auto_increment,
'address2' varchar(50) default null,
'district' varchar(20) not null,
'city_id' smallint(5) unsigned not null
'postal_code' varchar(10) default null,
'phone' varchar(20) not null,
'location' geometry not null,
'last_update' timestamp not null default current-timestamp on update current_timestamp,
primary key('address_id'),
key 'idx_fk_city_id' ('city_id'),
spatial key 'idx_location' ('location'),
CONTRAINT 'fk_address_city' FOREIGN KEY('city_id') REFERENCES 'city'('city_id') on UPDATE CASCADE


















select * from actor


