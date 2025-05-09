'use client';

import { useState } from 'react';
import {
  SHOP_LOCATIONS,
  SHOP_CATEGORIES,
  ShopSortType,
  ShopSortOrder,
} from '@/constants/components/shop/shopEnum';

const locations = SHOP_LOCATIONS;
const categories = SHOP_CATEGORIES;

export default function ShopFilterBar() {
  const [selectedLocation, setSelectedLocation] = useState('전체 지역');
  const [selectedCategory, setSelectedCategory] = useState('모든 장비');
  const [parkingOnly, setParkingOnly] = useState(false);
  // 정렬 상태: type(평점/리뷰), order(desc/asc)
  const [sort, setSort] = useState<{
    type: ShopSortType;
    order: ShopSortOrder;
  }>({ type: '평점순', order: 'desc' });

  // 정렬 토글 핸들러
  const handleSortToggle = (type: ShopSortType) => {
    setSort((prev) => {
      if (prev.type === type) {
        // 같은 타입이면 order만 토글
        return { type, order: prev.order === 'desc' ? 'asc' : 'desc' };
      } else {
        // 타입 변경 시 기본은 내림차순
        return { type, order: 'desc' };
      }
    });
  };

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-3 bg-white p-4">
      {/* 지역 필터 */}
      <select
        className="min-w-[120px] rounded-md border border-[#E0E0E0] bg-white px-4 py-2 text-sm text-[#222]"
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
      {/* 장비 카테고리 필터 */}
      <select
        className="min-w-[120px] rounded-md border border-[#E0E0E0] bg-white px-4 py-2 text-sm text-[#222]"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      {/* 주차 필터 */}
      <label className="flex cursor-pointer items-center gap-1 text-sm text-[#222]">
        <input
          type="checkbox"
          checked={parkingOnly}
          onChange={(e) => setParkingOnly(e.target.checked)}
          className="accent-[#4C6EF5]"
        />
        주차 가능
      </label>
      {/* 정렬 필터 */}
      <span className="mx-2 flex items-center text-sm text-[#888]">정렬:</span>
      <button
        className={`min-w-[90px] rounded-md border px-4 py-2 text-sm font-semibold ${sort.type === '평점순' ? 'border-[#4C6EF5] bg-[#4C6EF5] text-white' : 'border-[#E0E0E0] bg-white text-[#222]'}`}
        onClick={() => handleSortToggle('평점순')}
      >
        평점순{' '}
        {sort.type === '평점순' ? (sort.order === 'desc' ? '▼' : '▲') : ''}
      </button>
      <button
        className={`min-w-[90px] rounded-md border px-4 py-2 text-sm font-semibold ${sort.type === '리뷰순' ? 'border-[#4C6EF5] bg-[#4C6EF5] text-white' : 'border-[#E0E0E0] bg-white text-[#222]'}`}
        onClick={() => handleSortToggle('리뷰순')}
      >
        리뷰순{' '}
        {sort.type === '리뷰순' ? (sort.order === 'desc' ? '▼' : '▲') : ''}
      </button>
    </div>
  );
}
