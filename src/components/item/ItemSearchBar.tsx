import React from 'react';

export default function ItemSearchBar() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="카메라 모델명 또는 브랜드로 검색"
        className="w-64 rounded border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        <span className="sr-only">검색</span>
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z"
          />
        </svg>
      </button>
    </form>
  );
}
