// RecentEquipments에서 사용하는 장비 enum/상수 데이터

export const RECENT_EQUIPMENT_IDS = [
  'sony-a7s3',
  'canon-r5',
  'dji-rs2',
  'godox-led',
] as const;
export type RecentEquipmentId = (typeof RECENT_EQUIPMENT_IDS)[number];

export interface RecentEquipmentItem {
  id: RecentEquipmentId;
  name: string;
  image: string;
  minPrice: number;
  shops: number;
  href: string;
}

export const RECENT_EQUIPMENT_ITEMS: RecentEquipmentItem[] = [
  {
    id: 'sony-a7s3',
    name: 'Sony A7S III',
    image: '/images/equipment-placeholder.jpg',
    minPrice: 50000,
    shops: 3,
    href: '/equipments/sony-a7s3',
  },
  {
    id: 'canon-r5',
    name: 'Canon EOS R5',
    image: '/images/equipment-placeholder.jpg',
    minPrice: 60000,
    shops: 5,
    href: '/equipments/canon-r5',
  },
  {
    id: 'dji-rs2',
    name: 'DJI Ronin RS2',
    image: '/images/equipment-placeholder.jpg',
    minPrice: 35000,
    shops: 4,
    href: '/equipments/dji-rs2',
  },
  {
    id: 'godox-led',
    name: 'Godox LED 조명 세트',
    image: '/images/equipment-placeholder.jpg',
    minPrice: 25000,
    shops: 6,
    href: '/equipments/godox-led',
  },
];
