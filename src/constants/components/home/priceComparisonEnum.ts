// PriceComparison에서 사용하는 비교 장비 enum/상수 데이터

export const PRICE_COMPARISON_IDS = ['sony-a7s3', 'canon-r5'] as const;
export type PriceComparisonId = (typeof PRICE_COMPARISON_IDS)[number];

export interface PriceComparisonShop {
  name: string;
  price: number;
}

export interface PriceComparisonItem {
  id: PriceComparisonId;
  name: string;
  image: string;
  shops: PriceComparisonShop[];
  href: string;
}

export const PRICE_COMPARISON_ITEMS: PriceComparisonItem[] = [
  {
    id: 'sony-a7s3',
    name: 'Sony A7S III',
    image: '/images/equipment-placeholder.jpg',
    shops: [
      { name: '프로렌탈', price: 55000 },
      { name: '카메라빌리지', price: 50000 },
      { name: '디지털프라자', price: 60000 },
    ],
    href: '/equipments/sony-a7s3',
  },
  {
    id: 'canon-r5',
    name: 'Canon EOS R5',
    image: '/images/equipment-placeholder.jpg',
    shops: [
      { name: '프로렌탈', price: 65000 },
      { name: '카메라빌리지', price: 60000 },
      { name: '디지털프라자', price: 70000 },
    ],
    href: '/equipments/canon-r5',
  },
];
