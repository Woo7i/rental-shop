import React from 'react';
import ShopCard from './ShopCard';

const shops = [
  {
    name: '렌탈샵 A',
    imageUrl: '', // 썸네일 이미지 URL
    location: '서울 강남구',
    rating: 4.8,
    reviewCount: 120,
    address: '서울 강남구 테헤란로 123',
    equipments: '카메라, 렌즈, 조명, 삼각대',
    openHours: '09:00~20:00',
    priceInfo: '카메라 1일 20,000원~',
    parking: true,
    contact: {
      phone: '02-1234-5678',
      kakao: '@rentalshopA',
    },
  },
  {
    name: '렌탈샵 B',
    imageUrl: '',
    location: '서울 마포구',
    rating: 4.7,
    reviewCount: 98,
    address: '서울 마포구 양화로 45',
    equipments: '미러리스 카메라, DSLR, 렌즈',
    openHours: '10:00~19:00',
    priceInfo: '미러리스 1일 18,000원~',
    parking: false,
    contact: {
      phone: '02-2345-6789',
      kakao: '@rentalshopB',
    },
  },
  {
    name: '렌탈샵 C',
    imageUrl: '',
    location: '서울 용산구',
    rating: 4.6,
    reviewCount: 86,
    address: '서울 용산구 이태원로 78',
    equipments: '카메라, 삼각대, 드론, 마이크',
    openHours: '09:30~20:30',
    priceInfo: '드론 1일 30,000원~',
    parking: true,
    contact: {
      phone: '02-3456-7890',
      kakao: '@rentalshopC',
    },
  },
  {
    name: '렌탈샵 D',
    imageUrl: '',
    location: '경기 부천시',
    rating: 4.5,
    reviewCount: 75,
    address: '경기 부천시 범안로 112',
    equipments: '카메라, 렌즈, 조명, 특수장비',
    openHours: '10:00~18:00',
    priceInfo: '특수장비 1일 50,000원~',
    parking: false,
    contact: {
      phone: '032-123-4567',
      kakao: '@rentalshopD',
    },
  },
];

export default function ShopList() {
  return (
    <div>
      {shops.map((shop, idx) => (
        <ShopCard key={idx} {...shop} />
      ))}
    </div>
  );
}
