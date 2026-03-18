alter table public.products
add column if not exists hidden boolean not null default false;
