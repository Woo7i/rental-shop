import Image from 'next/image';
import Link from 'next/link';

const EQUIPMENTS = [
  {
    id: 'sony-a7s3',
    name: 'Sony A7S III',
    image: '/images/equipment-placeholder.jpg',
    minPrice: 50000,
    shops: 3,
    href: '/equipments/sony-a7s3',
  },
  {
    id: 'canon-r5',
    name: 'Canon EOS R5',
    image: '/images/equipment-placeholder.jpg',
    minPrice: 60000,
    shops: 5,
    href: '/equipments/canon-r5',
  },
  {
    id: 'dji-rs2',
    name: 'DJI Ronin RS2',
    image: '/images/equipment-placeholder.jpg',
    minPrice: 35000,
    shops: 4,
    href: '/equipments/dji-rs2',
  },
  {
    id: 'godox-led',
    name: 'Godox LED 조명 세트',
    image: '/images/equipment-placeholder.jpg',
    minPrice: 25000,
    shops: 6,
    href: '/equipments/godox-led',
  },
] as const;

export default function RecentEquipments() {
  return (
    <section className="relative bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
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
          {EQUIPMENTS.map((equipment) => (
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
