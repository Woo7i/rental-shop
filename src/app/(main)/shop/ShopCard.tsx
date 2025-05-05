import Image from 'next/image';

interface ShopCardProps {
  name: string;
  imageUrl?: string;
  location: string;
  rating: number;
  reviewCount: number;
  address: string;
  equipments: string;
}

export default function ShopCard({
  name,
  imageUrl,
  location,
  rating,
  reviewCount,
  address,
  equipments,
}: ShopCardProps) {
  return (
    <div className="mb-6 flex items-center gap-6 rounded-xl border border-[#E0E0E0] bg-white p-6 shadow-sm">
      <div className="flex h-28 w-28 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#F1F3F5] text-sm text-[#bbb]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={112}
            height={112}
            className="h-full w-full object-cover"
          />
        ) : (
          '매장 이미지'
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-lg font-bold text-[#222]">{name}</h3>
        <div className="mb-1 flex items-center gap-1 text-sm">
          <span className="text-yellow-400">★</span>
          <span className="font-semibold text-[#222]">{rating}</span>
          <span className="text-[#888]">({reviewCount} 리뷰)</span>
        </div>
        <div className="mb-1 text-sm text-[#666]">{address}</div>
        <div className="text-sm text-[#888]">{equipments}</div>
      </div>
      <div className="flex min-w-[100px] flex-col gap-2">
        <button className="rounded-md bg-[#4C6EF5] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4263eb]">
          방문하기
        </button>
        <button className="rounded-md border border-[#4C6EF5] bg-white px-4 py-2 text-sm font-semibold text-[#4C6EF5] hover:bg-[#F1F3F5]">
          찜하기
        </button>
      </div>
    </div>
  );
}
