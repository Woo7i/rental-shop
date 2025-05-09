'use client';

import React from 'react';

interface ItemCategoryTabsProps {
  subCategory: string;
  subCategories: string[];
  onSubCategoryChange: (value: string) => void;
}

export default function ItemCategoryTabs({
  subCategory,
  subCategories,
  onSubCategoryChange,
}: ItemCategoryTabsProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {subCategories.map((type) => (
        <button
          key={type}
          className={`rounded border px-5 py-2 text-sm font-semibold transition ${subCategory === type ? 'border-blue-600 bg-blue-600 text-white' : 'border-transparent bg-gray-100 text-gray-700 hover:bg-blue-50'}`}
          onClick={() => onSubCategoryChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
