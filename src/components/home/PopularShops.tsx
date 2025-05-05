import Image from 'next/image';
import Link from 'next/link';

const SHOPS = [
  {
    id: 'shop-a',
    name: '렌탈샵 A',
    image: '/images/shop-placeholder.jpg',
    rating: 4.8,
    reviews: 120,
    location: '서울 강남구',
    href: '/shops/shop-a',
  },
  {
    id: 'shop-b',
    name: '렌탈샵 B',
    image: '/images/shop-placeholder.jpg',
    rating: 4.7,
    reviews: 98,
    location: '서울 마포구',
    href: '/shops/shop-b',
  },
  {
    id: 'shop-c',
    name: '렌탈샵 C',
    image: '/images/shop-placeholder.jpg',
    rating: 4.6,
    reviews: 86,
    location: '서울 용산구',
    href: '/shops/shop-c',
  },
  {
    id: 'shop-d',
    name: '렌탈샵 D',
    image: '/images/shop-placeholder.jpg',
    rating: 4.5,
    reviews: 75,
    location: '경기 부천시',
    href: '/shops/shop-d',
  },
] as const;

export default function PopularShops() {
  return (
    <section className="relative bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#333333]">인기 렌탈샵</h2>
          <Link
            href="/shop"
            className="text-sm text-[#4C6EF5] transition-colors hover:text-[#4263eb]"
          >
            더 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {SHOPS.map((shop, index) => (
            <Link
              key={shop.id}
              href={shop.href}
              className="group rounded-lg border border-[#E0E0E0] bg-white p-4 transition-colors hover:border-[#4C6EF5]"
            >
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-md bg-[#F8F9FA]">
                <Image
                  src={shop.image}
                  alt={shop.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 2}
                />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#333333]">
                {shop.name}
              </h3>
              <p className="mb-2 text-sm text-[#666666]">
                ⭐ {shop.rating} ({shop.reviews})
              </p>
              <p className="text-sm text-[#999999]">{shop.location}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
