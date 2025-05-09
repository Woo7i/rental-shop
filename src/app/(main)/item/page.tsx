'use client';

import { useState } from 'react';
import CommonHeroSection from '@/components/common/CommonHeroSection';
import ItemFilterBar from '@/components/item/ItemFilterBar';
import ItemCategoryTabs from '@/components/item/ItemCategoryTabs';
import ItemList from '@/app/(main)/item/ItemList';
import Pagination from '@/components/common/Pagination';
import { CATEGORY_INFO } from '@/constants/categoryInfo';
import {
  CAMERA_TYPES,
  LENS_TYPES,
  LIGHT_TYPES,
  AUDIO_TYPES,
  MAIN_CATEGORIES,
  MainCategory,
  CameraType,
  LensType,
  LightType,
  AudioType,
} from '@/constants/categories';

const SUB_CATEGORIES: Record<MainCategory, readonly string[]> = {
  카메라: CAMERA_TYPES,
  렌즈: LENS_TYPES,
  조명: LIGHT_TYPES,
  음향: AUDIO_TYPES,
};

const ALL_ITEMS = [
  {
    id: 1,
    name: 'Sony A7S III',
    mainCategory: '카메라' as MainCategory,
    type: 'Mirrorless' as CameraType,
    price: 50000,
    rating: 4.8,
    reviewCount: 120,
  },
  {
    id: 2,
    name: 'Canon EOS R5',
    mainCategory: '카메라' as MainCategory,
    type: 'DSLR' as CameraType,
    price: 60000,
    rating: 4.7,
    reviewCount: 98,
  },
  {
    id: 3,
    name: 'DJI Osmo',
    mainCategory: '카메라' as MainCategory,
    type: 'Action Cam' as CameraType,
    price: 55000,
    rating: 4.6,
    reviewCount: 86,
  },
  {
    id: 4,
    name: '삼양 85mm',
    mainCategory: '렌즈' as MainCategory,
    type: '단렌즈' as LensType,
    price: 30000,
    rating: 4.5,
    reviewCount: 75,
  },
  {
    id: 5,
    name: 'Godox LED',
    mainCategory: '조명' as MainCategory,
    type: 'LED' as LightType,
    price: 20000,
    rating: 4.4,
    reviewCount: 60,
  },
  {
    id: 6,
    name: 'Rode Mic',
    mainCategory: '음향' as MainCategory,
    type: '마이크' as AudioType,
    price: 15000,
    rating: 4.3,
    reviewCount: 50,
  },
];

export default function ItemPage() {
  const [mainCategory, setMainCategory] = useState<MainCategory>('카메라');
  const [subCategory, setSubCategory] = useState<string>('전체');

  // 타입별 필터링
  const filteredItems = ALL_ITEMS.filter(
    (item) =>
      item.mainCategory === mainCategory &&
      (subCategory === '전체' || item.type === subCategory)
  );

  return (
    <div className="flex min-h-screen flex-col">
      <CommonHeroSection
        title={CATEGORY_INFO[mainCategory].title}
        description={CATEGORY_INFO[mainCategory].description}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <ItemFilterBar
            mainCategory={mainCategory}
            onMainCategoryChange={setMainCategory}
            mainCategories={[...MAIN_CATEGORIES]}
          />
          <ItemCategoryTabs
            subCategory={subCategory}
            subCategories={[...SUB_CATEGORIES[mainCategory]]}
            onSubCategoryChange={setSubCategory}
          />
        </div>
      </section>
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <ItemList items={filteredItems} />
          <Pagination />
        </div>
      </main>
      <footer className="bg-[#232526] py-8 text-center text-sm text-gray-400">
        © 2025 렌탈샵 비교 플랫폼. All rights reserved.
      </footer>
    </div>
  );
}
