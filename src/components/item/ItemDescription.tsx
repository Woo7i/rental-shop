import React from 'react';

interface ItemDescriptionProps {
  description: string;
}

const ItemDescription: React.FC<ItemDescriptionProps> = ({ description }) => {
  return (
    <section className="rounded-lg bg-white p-6 shadow">
      <h3 className="mb-2 text-lg font-bold">상품 설명</h3>
      <p className="whitespace-pre-line text-gray-700">{description}</p>
    </section>
  );
};

export default ItemDescription;
