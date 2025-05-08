import HeroSection from '@/components/home/HeroSection';
import PopularCategories from '@/components/home/PopularCategories';
import PopularShops from '@/components/home/PopularShops';
import RecentEquipments from '@/components/home/RecentEquipments';
import PriceComparison from '@/components/home/PriceComparison';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        title="최적의 촬영 장비를 찾아보세요"
        description="다양한 렌탈샵의 장비와 가격을 한눈에 비교하세요"
        showFilterBar
        regionOptions={['서울', '경기', '부산']}
        categoryOptions={['카메라', '렌즈', '조명']}
      />
      <PopularCategories />
      <PopularShops />
      <RecentEquipments />
      <PriceComparison />
    </div>
  );
}
