import HeroSection from '@/components/home/HeroSection';
import PopularCategories from '@/components/home/PopularCategories';
import PopularShops from '@/components/home/PopularShops';
import RecentEquipments from '@/components/home/RecentEquipments';
import PriceComparison from '@/components/home/PriceComparison';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PopularCategories />
      <PopularShops />
      <RecentEquipments />
      <PriceComparison />
    </div>
  );
}
