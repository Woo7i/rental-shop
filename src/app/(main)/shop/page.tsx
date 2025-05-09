import CommonHeroSection from '@/components/common/CommonHeroSection';
import ShopFilterBar from '@/components/shop/ShopFilterBar';
import ShopList from '@/components/shop/ShopList';
import Pagination from '@/components/common/Pagination';

export default function ShopPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      {' '}
      {/* 4rem = pt-16 from layout */}
      <div className="sticky top-0 z-20 mb-4 bg-white shadow-sm">
        <div className="mx-auto w-full max-w-screen-xl px-2">
          <CommonHeroSection
            title="렌탈샵 목록"
            description="다양한 장비를 보유한 전국의 렌탈샵을 검색해보세요."
            className="pb-4" // 하단 여백 조정
          />
          <ShopFilterBar />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-screen-xl px-2 pb-8">
          {' '}
          {/* 스크롤 영역 */}
          <ShopList />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
