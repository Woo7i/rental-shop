import ShopFilterBar from './ShopFilterBar';
import ShopList from './ShopList';
import Pagination from './Pagination';
import { Search } from 'lucide-react';

export default function ShopPage() {
  return (
    <section className="container mx-auto max-w-7xl bg-[#F8F9FA] px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold text-[#222]">렌탈샵 목록</h1>
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-base text-[#888]">
          다양한 장비를 보유한 전국의 렌탈샵을 검색해보세요.
        </p>
        <div className="relative w-full max-w-xs md:w-80">
          <input
            type="text"
            placeholder="렌탈샵 이름 또는 지역 검색"
            className="w-full rounded-lg border border-[#E0E0E0] bg-white px-4 py-2 pr-10 text-sm focus:border-[#4C6EF5] focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4C6EF5]">
            <Search size={18} />
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-3xl">
        <ShopFilterBar />
        <ShopList />
        <Pagination />
      </div>
      {/* Pagination 컴포넌트는 하단에 추가 예정 */}
    </section>
  );
}
