'use client';

import React, { useState } from 'react';

export default function Pagination() {
  const [page, setPage] = useState(1);
  const totalPages = 2;
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold transition ${page === idx + 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'}`}
          onClick={() => setPage(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}
