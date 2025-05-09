import Link from 'next/link';

interface ItemCardProps {
  id: number;
  name: string;
  type: string;
  image?: string;
  price?: number;
  rating: number;
  reviewCount: number;
  description?: string;
}

export default function ItemCard({
  id,
  name,
  type,
  image,
  price,
  rating,
  reviewCount,
  description,
}: ItemCardProps) {
  return (
    <Link href={`/item/${id}`}>
      <div className="flex cursor-pointer flex-col rounded-lg border bg-white p-4 shadow transition hover:shadow-lg">
        <div className="mb-4 flex h-36 w-full items-center justify-center rounded bg-gray-100 text-sm text-gray-400">
          {image ? (
            <img src={image} alt={name} className="h-full object-contain" />
          ) : (
            '카메라 이미지'
          )}
        </div>
        <div className="flex-1">
          <h3 className="mb-1 text-base font-bold">{name}</h3>
          <div className="mb-2 text-xs text-gray-500">{type}</div>
          <div className="mb-1 text-lg font-bold text-blue-600">
            {typeof price === 'number' ? `${price.toLocaleString()}원` : '-'}
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span className="text-yellow-400">★</span>
            {rating} <span>({reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
