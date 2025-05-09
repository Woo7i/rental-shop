import React from 'react';

interface ItemInfoProps {
  name: string;
  price: number;
  category: string;
  status: string;
}

const ItemInfo: React.FC<ItemInfoProps> = ({
  name,
  price,
  category,
  status,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="text-lg text-gray-600">카테고리: {category}</div>
      <div className="text-xl font-semibold text-blue-600">
        {price.toLocaleString()}원
      </div>
      <div className="text-sm text-green-600">{status}</div>
    </div>
  );
};

export default ItemInfo;
