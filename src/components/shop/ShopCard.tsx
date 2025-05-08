import Image from 'next/image';

interface ShopCardProps {
  name: string;
  imageUrl?: string;
  rating: number;
  reviewCount: number;
  address: string;
  equipments: string;
  openHours: string;
  priceInfo: string;
  parking: boolean;
  contact: {
    phone?: string;
    kakao?: string;
  };
}

export default function ShopCard({
  name,
  imageUrl,
  rating,
  reviewCount,
  address,
  equipments,
  openHours,
  priceInfo,
  parking,
  contact,
}: ShopCardProps) {
  return (
    <div className="mb-6 flex flex-col items-stretch gap-6 rounded-xl border border-[#E0E0E0] bg-white p-6 shadow-sm md:flex-row">
      {/* 썸네일 + 제목/평점 */}
      <div className="mx-auto mb-4 flex w-32 flex-col items-center md:mx-0 md:mb-0">
        <div className="mb-2 flex h-28 w-28 items-center justify-center overflow-hidden rounded-lg bg-[#F1F3F5] text-sm text-[#bbb]">
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
        <h3 className="whitespace-nowrap text-center text-base font-bold text-[#222]">
          {name}
        </h3>
        <div className="flex items-center justify-center gap-1 text-sm">
          <span className="text-yellow-400">★</span>
          <span className="font-semibold text-[#222]">{rating}</span>
          <span className="text-[#888]">({reviewCount} 리뷰)</span>
        </div>
      </div>
      {/* 정보 열 */}
      <div className="flex flex-1 flex-col justify-center">
        <div
          className="flex items-stretch divide-x divide-[#E0E0E0] overflow-hidden bg-white text-sm font-medium text-[#444]"
          style={{ height: 112 }}
        >
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-2 py-3 text-center">
            <span className="mb-0.5 block text-xs font-semibold text-[#888]">
              주소
            </span>
            <span
              className="block w-full overflow-hidden text-ellipsis text-[#222]"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                whiteSpace: 'normal',
                maxHeight: '2.6em',
              }}
              title={address}
            >
              {address}
            </span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-2 py-3 text-center">
            <span className="mb-0.5 block text-xs font-semibold text-[#888]">
              장비
            </span>
            <span
              className="block w-full overflow-hidden text-ellipsis text-[#222]"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                whiteSpace: 'normal',
                maxHeight: '2.6em',
              }}
              title={equipments}
            >
              {equipments}
            </span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-2 py-3 text-center">
            <span className="mb-0.5 block text-xs font-semibold text-[#888]">
              운영시간
            </span>
            <span
              className="block w-full overflow-hidden text-ellipsis text-[#222]"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                whiteSpace: 'normal',
                maxHeight: '2.6em',
              }}
            >
              {openHours}
            </span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-2 py-3 text-center">
            <span className="mb-0.5 block text-xs font-semibold text-[#888]">
              가격
            </span>
            <span
              className="block w-full overflow-hidden text-ellipsis text-[#222]"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                whiteSpace: 'normal',
                maxHeight: '2.6em',
              }}
            >
              {priceInfo}
            </span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-2 py-3 text-center">
            <span className="mb-0.5 block text-xs font-semibold text-[#888]">
              주차
            </span>
            <span className="block text-[#222]">{parking ? 'O' : 'X'}</span>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center border-r-0 px-2 py-3 text-center">
            <span className="mb-0.5 block text-xs font-semibold text-[#888]">
              연락처
            </span>
            <span
              className="block w-full overflow-hidden text-ellipsis text-[#222]"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                whiteSpace: 'normal',
                maxHeight: '2.6em',
              }}
            >
              {contact.phone}
              {contact.kakao && ` / 카카오톡: ${contact.kakao}`}
            </span>
          </div>
        </div>
        {/* 버튼 영역 - 정보 열 아래, 중앙 정렬 */}
        <div className="mt-4 flex justify-center gap-2">
          <button className="rounded-md bg-[#4C6EF5] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4263eb]">
            상세보기
          </button>
          <button className="rounded-md border border-[#4C6EF5] bg-white px-4 py-2 text-sm font-semibold text-[#4C6EF5] hover:bg-[#F1F3F5]">
            방문하기
          </button>
        </div>
      </div>
    </div>
  );
}
