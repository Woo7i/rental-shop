import React from 'react';

const ItemActionButtons: React.FC = () => {
  return (
    <div className="mt-4 flex gap-4">
      <button className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700">
        대여하기
      </button>
      <button className="rounded-lg bg-gray-200 px-6 py-2 font-semibold text-gray-800 transition hover:bg-gray-300">
        찜하기
      </button>
    </div>
  );
};

export default ItemActionButtons;
