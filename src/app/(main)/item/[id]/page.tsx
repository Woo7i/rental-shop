import ItemImageSlider from '@/components/item/ItemImageSlider';
import ItemInfo from '@/components/item/ItemInfo';
import ItemActionButtons from '@/components/item/ItemActionButtons';
import ItemDescription from '@/components/item/ItemDescription';
import ItemReview from '@/components/item/ItemReview';

export default function ItemDetailPage() {
  // TODO: 실제 데이터 연동 전 임시 데이터
  const item = {
    images: ['/sample1.jpg', '/sample2.jpg'],
    name: '샘플 상품명',
    price: 12000,
    category: '카메라',
    status: '대여 가능',
    description: '이 상품은 ...',
    reviews: [],
  };

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="min-w-[300px] flex-1">
          <ItemImageSlider images={item.images} />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <ItemInfo
            name={item.name}
            price={item.price}
            category={item.category}
            status={item.status}
          />
          <ItemActionButtons />
        </div>
      </div>
      <ItemDescription description={item.description} />
      <ItemReview reviews={item.reviews} />
    </div>
  );
}
