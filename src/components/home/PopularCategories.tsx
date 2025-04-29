import Image from 'next/image';
import Link from 'next/link';

const CATEGORIES = [
  {
    id: 'camera',
    name: '카메라',
    image: '/images/categories/camera.jpg',
    count: 128,
    href: '/categories/camera',
  },
  {
    id: 'lens',
    name: '렌즈',
    image: '/images/categories/lens.jpg',
    count: 256,
    href: '/categories/lens',
  },
  {
    id: 'lighting',
    name: '조명',
    image: '/images/categories/lighting.jpg',
    count: 64,
    href: '/categories/lighting',
  },
  {
    id: 'audio',
    name: '음향장비',
    image: '/images/categories/audio.jpg',
    count: 96,
    href: '/categories/audio',
  },
  {
    id: 'stabilizer',
    name: '스태빌라이저',
    image: '/images/categories/stabilizer.jpg',
    count: 32,
    href: '/categories/stabilizer',
  },
  {
    id: 'drone',
    name: '드론',
    image: '/images/categories/drone.jpg',
    count: 24,
    href: '/categories/drone',
  },
] as const;

interface CategoryCardProps {
  category: (typeof CATEGORIES)[number];
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group relative flex aspect-square items-end overflow-hidden rounded-lg bg-black/5 p-6"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
        className="object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="relative">
        <h3 className="mb-1 text-lg font-bold text-white">{category.name}</h3>
        <p className="text-sm text-white/80">{category.count}개의 장비</p>
      </div>
    </Link>
  );
}

export default function PopularCategories() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">인기 카테고리</h2>
          <Link
            href="/categories"
            className="text-sm text-blue-600 transition-colors hover:text-blue-700"
          >
            전체 카테고리 →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
