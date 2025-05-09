import Image from 'next/image';
import Link from 'next/link';
import { RECENT_EQUIPMENT_ITEMS } from '@/constants/components/home/recentEquipmentsEnum';

export default function RecentEquipments() {
  return (
    <section className="relative bg-[#F8F9FA] py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#333333]">
            최근 추가된 장비
          </h2>
          <Link
            href="/equipments"
            className="text-sm text-[#4C6EF5] transition-colors hover:text-[#4263eb]"
          >
            더 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {RECENT_EQUIPMENT_ITEMS.map((equipment) => (
            <Link
              key={equipment.id}
              href={equipment.href}
              className="group rounded-lg border border-[#E0E0E0] bg-white p-4 transition-colors hover:border-[#4C6EF5]"
            >
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-md bg-[#F8F9FA]">
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#333333]">
                {equipment.name}
              </h3>
              <p className="mb-2 text-sm text-[#666666]">
                최저가: {equipment.minPrice.toLocaleString()}원/일
              </p>
              <p className="text-sm text-[#4C6EF5]">
                {equipment.shops}개 업체 보유
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
