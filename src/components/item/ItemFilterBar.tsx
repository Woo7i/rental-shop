import React from 'react';

export type MainCategory = '카메라' | '렌즈' | '조명' | '음향';

interface ItemFilterBarProps {
  mainCategory: MainCategory;
  onMainCategoryChange: (value: MainCategory) => void;
  mainCategories: readonly MainCategory[];
}

export default function ItemFilterBar({
  mainCategory,
  onMainCategoryChange,
  mainCategories,
}: ItemFilterBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 rounded-lg bg-white p-2">
      <select
        className="min-w-[120px] rounded border px-3 py-2 text-sm"
        value={mainCategory}
        onChange={(e) => onMainCategoryChange(e.target.value as MainCategory)}
      >
        {mainCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <select className="min-w-[120px] rounded border px-3 py-2 text-sm">
        <option>가격: 모든 가격대</option>
        <option>3만원 이하</option>
        <option>3~5만원</option>
        <option>5만원 이상</option>
      </select>
      <select className="min-w-[100px] rounded border px-3 py-2 text-sm">
        <option>지역: 전국</option>
        <option>서울</option>
        <option>경기</option>
        <option>부산</option>
      </select>
      <button className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
        인기순
      </button>
      <button className="rounded bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-300">
        가격 낮은순
      </button>
    </div>
  );
}
