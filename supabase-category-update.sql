alter table public.products
add column if not exists category text not null default 'outer';

alter table public.products
add column if not exists is_new boolean not null default false;

update public.products
set
  category = case
    when id = 'jumper' then 'outer'
    when id = 'blouse' then 'blouse-shirt'
    else coalesce(category, 'outer')
  end,
  is_new = case
    when id in ('jumper', 'blouse') then true
    else coalesce(is_new, false)
  end;
