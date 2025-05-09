import React from 'react';

interface ItemImageSliderProps {
  images: string[];
}

const ItemImageSlider: React.FC<ItemImageSliderProps> = ({ images }) => {
  return (
    <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100">
      {/* TODO: 슬라이더 구현, 현재는 첫 번째 이미지만 표시 */}
      <img
        src={images[0]}
        alt="상품 이미지"
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default ItemImageSlider;
