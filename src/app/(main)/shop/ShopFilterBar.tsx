export default function ShopFilterBar() {
  return (
    <div className="mb-8 flex flex-wrap gap-2 rounded-lg border border-[#E0E0E0] bg-[#F8F9FA] p-4">
      <button className="rounded-md border border-[#E0E0E0] bg-white px-4 py-2 text-sm text-[#222]">
        전체 지역
      </button>
      <button className="rounded-md border border-[#E0E0E0] bg-white px-4 py-2 text-sm text-[#222]">
        모든 카테고리
      </button>
      <span className="mx-2 flex items-center text-sm text-[#888]">정렬:</span>
      <button className="rounded-md border border-[#4C6EF5] bg-[#4C6EF5] px-4 py-2 text-sm font-semibold text-white">
        인기순
      </button>
      <button className="rounded-md border border-[#E0E0E0] bg-white px-4 py-2 text-sm text-[#222]">
        평점순
      </button>
      <button className="rounded-md border border-[#E0E0E0] bg-white px-4 py-2 text-sm text-[#222]">
        리뷰 많은순
      </button>
    </div>
  );
}
