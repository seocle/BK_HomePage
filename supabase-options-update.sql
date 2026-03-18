alter table public.products
add column if not exists colors jsonb not null default '[]'::jsonb;

alter table public.products
add column if not exists sizes jsonb not null default '[]'::jsonb;
