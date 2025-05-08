import Image from 'next/image';
import { Search } from 'lucide-react';
import React from 'react';

interface CommonHeroSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function CommonHeroSection({
  title,
  description,
  className = '',
}: CommonHeroSectionProps) {
  return (
    <div className={`relative w-full py-10 ${className}`}>
      <div className="pointer-events-none absolute inset-0 select-none">
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
      <div className="relative z-10 mx-auto flex w-full max-w-screen-xl items-center justify-between px-4">
        <div>
          {title && (
            <h1 className="mb-1 text-3xl font-bold text-[#333]">{title}</h1>
          )}
          {description && (
            <p className="text-base text-[#666]">{description}</p>
          )}
        </div>
        <div className="flex w-[340px] items-center gap-2">
          <input
            type="text"
            placeholder="카메라 모델명 또는 브랜드 검색"
            className="flex-1 rounded-md border border-[#E0E0E0] px-4 py-2 text-sm focus:border-[#4C6EF5] focus:outline-none"
          />
          <button className="rounded-md bg-[#4C6EF5] p-2 text-white hover:bg-[#4263eb]">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
