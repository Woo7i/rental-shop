import React from 'react';
import ShopCard from './ShopCard';
import { SHOP_ITEMS } from '@/constants/components/shop/shopEnum';

export default function ShopList() {
  return (
    <div>
      {SHOP_ITEMS.map((shop, idx) => (
        <ShopCard key={idx} {...shop} />
      ))}
    </div>
  );
}
