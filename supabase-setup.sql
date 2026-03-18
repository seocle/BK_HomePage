insert into storage.buckets (id, name, public)
values ('products', 'products', true)
on conflict (id) do nothing;

create table if not exists public.products (
  id text primary key,
  created_at timestamptz not null default now(),
  label jsonb not null,
  name jsonb not null,
  description jsonb not null,
  short_description jsonb not null,
  price jsonb not null,
  sold_out boolean not null default false,
  images jsonb not null default '[]'::jsonb
);

alter table public.products enable row level security;

drop policy if exists "Public can read products" on public.products;
create policy "Public can read products"
on public.products
for select
to public
using (true);

drop policy if exists "Authenticated can insert products" on public.products;
create policy "Authenticated can insert products"
on public.products
for insert
to authenticated
with check (true);

drop policy if exists "Authenticated can update products" on public.products;
create policy "Authenticated can update products"
on public.products
for update
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated can delete products" on public.products;
create policy "Authenticated can delete products"
on public.products
for delete
to authenticated
using (true);

drop policy if exists "Public can view product images" on storage.objects;
create policy "Public can view product images"
on storage.objects
for select
to public
using (bucket_id = 'products');

drop policy if exists "Authenticated can upload product images" on storage.objects;
create policy "Authenticated can upload product images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'products');

drop policy if exists "Authenticated can update product images" on storage.objects;
create policy "Authenticated can update product images"
on storage.objects
for update
to authenticated
using (bucket_id = 'products')
with check (bucket_id = 'products');

drop policy if exists "Authenticated can delete product images" on storage.objects;
create policy "Authenticated can delete product images"
on storage.objects
for delete
to authenticated
using (bucket_id = 'products');

insert into public.products (
  id,
  created_at,
  label,
  name,
  description,
  short_description,
  price,
  sold_out,
  images
)
values
(
  'jumper',
  '2026-03-19T01:46:00+09:00',
  '{"ko":"Outer","zh":"Outer"}'::jsonb,
  '{"ko":"반달포켓점퍼","zh":"半月口袋夹克"}'::jsonb,
  '{"ko":"구조감 있는 실루엣과 포켓 디테일이 돋보이는 데일리 점퍼","zh":"立体版型搭配口袋细节，适合日常陈列与销售"}'::jsonb,
  '{"ko":"포켓 디테일이 살아있는 데일리 점퍼","zh":"带有口袋细节的日常夹克"}'::jsonb,
  '{"ko":"52,000원","zh":"52,000韩元"}'::jsonb,
  false,
  '[
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%EB%B0%98%EB%8B%AC%ED%8F%AC%EC%BC%93%EC%A0%90%ED%8D%BC_52000%EC%9B%90/KakaoTalk_20260319_014656878.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%EB%B0%98%EB%8B%AC%ED%8F%AC%EC%BC%93%EC%A0%90%ED%8D%BC_52000%EC%9B%90/KakaoTalk_20260319_014656878_01.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%EB%B0%98%EB%8B%AC%ED%8F%AC%EC%BC%93%EC%A0%90%ED%8D%BC_52000%EC%9B%90/KakaoTalk_20260319_014656878_02.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%EB%B0%98%EB%8B%AC%ED%8F%AC%EC%BC%93%EC%A0%90%ED%8D%BC_52000%EC%9B%90/KakaoTalk_20260319_014656878_03.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%EB%B0%98%EB%8B%AC%ED%8F%AC%EC%BC%93%EC%A0%90%ED%8D%BC_52000%EC%9B%90/KakaoTalk_20260319_014656878_04.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%EB%B0%98%EB%8B%AC%ED%8F%AC%EC%BC%93%EC%A0%90%ED%8D%BC_52000%EC%9B%90/KakaoTalk_20260319_014656878_05.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%EB%B0%98%EB%8B%AC%ED%8F%AC%EC%BC%93%EC%A0%90%ED%8D%BC_52000%EC%9B%90/KakaoTalk_20260319_014656878_06.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%EB%B0%98%EB%8B%AC%ED%8F%AC%EC%BC%93%EC%A0%90%ED%8D%BC_52000%EC%9B%90/KakaoTalk_20260319_014656878_07.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%EB%B0%98%EB%8B%AC%ED%8F%AC%EC%BC%93%EC%A0%90%ED%8D%BC_52000%EC%9B%90/KakaoTalk_20260319_014656878_08.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%EB%B0%98%EB%8B%AC%ED%8F%AC%EC%BC%93%EC%A0%90%ED%8D%BC_52000%EC%9B%90/KakaoTalk_20260319_014656878_09.jpg"
  ]'::jsonb
),
(
  'blouse',
  '2026-03-19T01:47:00+09:00',
  '{"ko":"Blouse","zh":"Blouse"}'::jsonb,
  '{"ko":"파스텔줄지블라우스","zh":"马卡龙条纹衬衫"}'::jsonb,
  '{"ko":"부드러운 컬러감과 스트라이프 패턴이 매력적인 봄 시즌 블라우스","zh":"柔和配色与条纹设计结合的春季女装上衣"}'::jsonb,
  '{"ko":"가볍게 보여주기 좋은 봄 블라우스","zh":"适合春季陈列的轻盈上衣"}'::jsonb,
  '{"ko":"37,000원","zh":"37,000韩元"}'::jsonb,
  false,
  '[
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%ED%8C%8C%EC%8A%A4%ED%85%94%EC%A4%84%EC%A7%80%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4_37000%EC%9B%90/KakaoTalk_20260319_014656878_10.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%ED%8C%8C%EC%8A%A4%ED%85%94%EC%A4%84%EC%A7%80%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4_37000%EC%9B%90/KakaoTalk_20260319_014656878_11.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%ED%8C%8C%EC%8A%A4%ED%85%94%EC%A4%84%EC%A7%80%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4_37000%EC%9B%90/KakaoTalk_20260319_014656878_12.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%ED%8C%8C%EC%8A%A4%ED%85%94%EC%A4%84%EC%A7%80%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4_37000%EC%9B%90/KakaoTalk_20260319_014656878_13.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%ED%8C%8C%EC%8A%A4%ED%85%94%EC%A4%84%EC%A7%80%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4_37000%EC%9B%90/KakaoTalk_20260319_014656878_14.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%ED%8C%8C%EC%8A%A4%ED%85%94%EC%A4%84%EC%A7%80%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4_37000%EC%9B%90/KakaoTalk_20260319_014656878_15.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%ED%8C%8C%EC%8A%A4%ED%85%94%EC%A4%84%EC%A7%80%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4_37000%EC%9B%90/KakaoTalk_20260319_014656878_16.jpg",
    "https://seocle.github.io/BK_HomePage/Image/%EC%9D%98%EB%A5%98/%ED%8C%8C%EC%8A%A4%ED%85%94%EC%A4%84%EC%A7%80%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4_37000%EC%9B%90/KakaoTalk_20260319_014656878_17.jpg"
  ]'::jsonb
)
on conflict (id) do nothing;
