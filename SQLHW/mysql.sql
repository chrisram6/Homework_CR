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
)
engine=innoDB auto_increment=606 default charset=utf8

select s.first_name as 'First Name', s.last_name as 'Last Name', a.address as 'Address' from staff s 
inner join address a on a.address_id = s.address_id;

select fname 'First Name', lname 'Last Name',concat('$',format(sum(amount),2)) "Tot paid Aug '05" from (
	select s.first_name fname, s.last_name lname, p.staff_id staffid, p.amount amount, p.payment_date pdate from staff s
	inner join payment p on p.staff_id = s.staff_id
	having payment_date between '2005-08-01 00:00:00' and '2005-09-01 00:00:00'
) A
group by A.staffid;

select f.title, count(a.actor_id) from film f
inner join film_actor a on a.film_id = f.film_id
group by f.title;

select f.title Title, count(i.inventory_id) 'Num copies' from inventory i
inner join film f on f.film_id = i.film_id
group by f.film_id
having f.title like 'HUNCHBACK IMPOSSIBLE';

select c.first_name 'First Name', c.last_name 'Last Name', concat('$',format(sum(p.amount), 2)) 'Total Amount Paid' from payment p
inner join customer c on c.customer_id = p.customer_id
group by c.customer_id
order by c.last_name;



select title from film where language_id in (
select language_id from language where name = 'English')
and (title like 'K%' or title like 'Q%');

select first_name, last_name from actor where actor_id in (
select actor_id from film_actor where film_id in ( 
select film_id from film where title = 'Alone Trip'));

select cust.first_name FirstName, cust.last_name LastName, cust.email Email, c.country Country from customer cust
inner join address a on a.address_id = cust.address_id
inner join city on a.city_id = city.city_id
inner join country c on city.country_id = c.country_id 
having Country = 'Canada';

select f.title, c.name from category c
inner join film_category fc on fc.category_id = c.category_id
inner join film f on f.film_id = fc.film_id
having c.name like 'family';

select f.title, count(r.rental_date) 'Count of rentals' from rental r
inner join inventory i on i.inventory_id = r.inventory_id
inner join film f on f.film_id = i.film_id
group by f.film_id
order by count(r.rental_date) DESC;

select s.store_id 'Store ID',concat('$',format(sum(p.amount),2)) 'Total Revenue' from payment p
inner join rental r on p.rental_id = r.rental_id
inner join inventory i on r.inventory_id = i.inventory_id
inner join store s on i.store_id = s.store_id
group by s.store_id;

select s.store_id StoreID, c.city City, co.country Country from store s
inner join address a on s.address_id = a.address_id
inner join city c on c.city_id = a.city_id
inner join country co on co.country_id = c.country_id;

select cat.name Genre, concat('$',format(sum(p.amount),2)) SumRevenue from category cat
inner join film_category fc on fc.category_id = cat.category_id
inner join inventory i on fc.film_id = i.film_id
inner join rental r on r.inventory_id = i.inventory_id
inner join payment p on p.rental_id = r.rental_id
group by Genre
order by SumRevenue DESC
limit 5;



create view topFiveRev as 
select cat.name Genre, concat('$',format(sum(p.amount),2)) SumRevenue from category cat
inner join film_category fc on fc.category_id = cat.category_id
inner join inventory i on fc.film_id = i.film_id
inner join rental r on r.inventory_id = i.inventory_id
inner join payment p on p.rental_id = r.rental_id
group by Genre
order by SumRevenue DESC
limit 5;

select * from topFiveRev;

drop view topFiveRev;


















