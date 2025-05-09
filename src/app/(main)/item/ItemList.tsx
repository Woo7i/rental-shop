import React from 'react';
import ItemCard from '@/components/item/ItemCard';

interface Item {
  id: number;
  name: string;
  type: string;
  image?: string;
  price: number;
  rating: number;
  reviewCount: number;
  description?: string;
}

interface ItemListProps {
  items: Item[];
}

export default function ItemList({ items }: ItemListProps) {
  // 임시 mock 데이터 (실제 사용 시 props.items를 그대로 사용)
  const mockItems =
    items.length > 0
      ? items
      : [
          {
            id: 1,
            name: 'Sony A7S III',
            type: '풀프레임 미러리스 카메라',
            image: '',
            price: 50000,
            rating: 4.8,
            reviewCount: 120,
          },
          {
            id: 2,
            name: 'Canon EOS R5',
            type: '풀프레임 미러리스 카메라',
            image: '',
            price: 60000,
            rating: 4.7,
            reviewCount: 98,
          },
          {
            id: 3,
            name: 'Nikon Z7 II',
            type: '풀프레임 미러리스 카메라',
            image: '',
            price: 55000,
            rating: 4.6,
            reviewCount: 86,
          },
          // ...더 많은 mock 데이터 추가 가능
        ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {mockItems.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
}
