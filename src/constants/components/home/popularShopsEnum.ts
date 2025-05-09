// PopularShops에서 사용하는 렌탈샵 enum/상수 데이터

export const POPULAR_SHOP_IDS = [
  'shop-a',
  'shop-b',
  'shop-c',
  'shop-d',
] as const;
export type PopularShopId = (typeof POPULAR_SHOP_IDS)[number];

export interface PopularShopItem {
  id: PopularShopId;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
  href: string;
}

export const POPULAR_SHOP_ITEMS: PopularShopItem[] = [
  {
    id: 'shop-a',
    name: '렌탈샵 A',
    image: '/images/shop-placeholder.jpg',
    rating: 4.8,
    reviews: 120,
    location: '서울 강남구',
    href: '/shops/shop-a',
  },
  {
    id: 'shop-b',
    name: '렌탈샵 B',
    image: '/images/shop-placeholder.jpg',
    rating: 4.7,
    reviews: 98,
    location: '서울 마포구',
    href: '/shops/shop-b',
  },
  {
    id: 'shop-c',
    name: '렌탈샵 C',
    image: '/images/shop-placeholder.jpg',
    rating: 4.6,
    reviews: 86,
    location: '서울 용산구',
    href: '/shops/shop-c',
  },
  {
    id: 'shop-d',
    name: '렌탈샵 D',
    image: '/images/shop-placeholder.jpg',
    rating: 4.5,
    reviews: 75,
    location: '경기 부천시',
    href: '/shops/shop-d',
  },
];
