import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

// 상수를 별도로 분리하여 가독성과 유지보수성 향상
const GRID_LAYOUTS = {
  base: 'grid-cols-2',
  sm: 'sm:grid-cols-3',
  md: 'md:grid-cols-4',
  lg: 'lg:grid-cols-6',
} as const;

const IMAGE_SIZES = {
  sm: '50vw',
  md: '33vw',
  lg: '25vw',
} as const;

// 카테고리 데이터 타입 정의로 예측 가능성 향상
interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
  href: string;
}

const CATEGORIES: Category[] = [
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
];

interface CategoryCardProps {
  category: Category;
  priority?: boolean;
}

// 메모이제이션을 통한 성능 최적화
const CategoryCard = memo(function CategoryCard({
  category,
  priority = false,
}: CategoryCardProps) {
  const { name, image, count, href } = category;

  return (
    <Link
      href={href}
      className="group relative flex aspect-square items-end overflow-hidden rounded-lg bg-black/5 p-6"
      aria-label={`${name} 카테고리로 이동, ${count}개의 장비 있음`}
    >
      <Image
        src={image}
        alt={name}
        fill
        priority={priority}
        sizes={`(max-width: 640px) ${IMAGE_SIZES.sm}, (max-width: 768px) ${IMAGE_SIZES.md}, ${IMAGE_SIZES.lg}`}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="relative">
        <h3 className="mb-1 text-lg font-bold text-white">{name}</h3>
        <p className="text-sm text-white/80">{count}개의 장비</p>
      </div>
    </Link>
  );
});

CategoryCard.displayName = 'CategoryCard';

// 메인 컴포넌트의 책임을 명확히 분리
export default function PopularCategories() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <header className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">인기 카테고리</h2>
          <Link
            href="/categories"
            className="text-sm text-blue-600 transition-colors hover:text-blue-700"
          >
            전체 카테고리 →
          </Link>
        </header>
        <div className={`grid gap-4 ${Object.values(GRID_LAYOUTS).join(' ')}`}>
          {CATEGORIES.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              priority={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
