import Image from 'next/image';
import Link from 'next/link';
import { POPULAR_SHOP_ITEMS } from '@/constants/components/home/popularShopsEnum';

export default function PopularShops() {
  return (
    <section className="relative bg-[#F8F9FA] py-20">
      <div className="container mx-auto max-w-7xl px-4">
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
          {POPULAR_SHOP_ITEMS.map((shop, index) => (
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
