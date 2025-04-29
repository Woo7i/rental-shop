import Image from 'next/image';
import { Search, MapPin, Grid } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.svg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
        </div>
      </div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-[#333333]">
            최적의 촬영 장비를 찾아보세요
          </h1>
          <p className="mb-8 text-xl text-[#666666]">
            다양한 렌탈샵의 장비와 가격을 한눈에 비교하세요
          </p>
          <div className="flex flex-col gap-4 rounded-lg border border-[#E0E0E0] bg-[#F0F0F0] p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#999999]" />
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="w-full rounded-md border border-[#E0E0E0] py-2 pl-10 pr-4 text-sm focus:border-[#4C6EF5] focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-48">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#999999]" />
                  <select className="w-full appearance-none rounded-md border border-[#E0E0E0] bg-white py-2 pl-10 pr-4 text-sm text-[#999999] focus:border-[#4C6EF5] focus:outline-none">
                    <option value="">지역 선택</option>
                  </select>
                </div>
              </div>
              <div className="w-48">
                <div className="relative">
                  <Grid className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#999999]" />
                  <select className="w-full appearance-none rounded-md border border-[#E0E0E0] bg-white py-2 pl-10 pr-4 text-sm text-[#999999] focus:border-[#4C6EF5] focus:outline-none">
                    <option value="">카테고리 선택</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="w-full rounded-md bg-[#4C6EF5] py-3 text-sm font-medium text-white transition-colors hover:bg-[#4263eb]">
              검색
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
