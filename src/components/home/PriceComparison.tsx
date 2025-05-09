import Image from 'next/image';
import Link from 'next/link';
import {
  PRICE_COMPARISON_ITEMS,
  PriceComparisonItem,
} from '@/constants/components/home/priceComparisonEnum';

interface ComparisonCardProps {
  comparison: PriceComparisonItem;
}

function ComparisonCard({ comparison }: ComparisonCardProps) {
  const minPrice = Math.min(...comparison.shops.map((shop) => shop.price));
  const maxPrice = Math.max(...comparison.shops.map((shop) => shop.price));
  const priceDiff = maxPrice - minPrice;

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <Link href={comparison.href} className="group block p-4">
        <div className="flex gap-4">
          <div className="relative aspect-square w-24 overflow-hidden rounded bg-black/5">
            <Image
              src={comparison.image}
              alt={comparison.name}
              fill
              sizes="96px"
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex-1">
            <h3 className="mb-2 font-bold text-gray-900">{comparison.name}</h3>
            <div className="space-y-1 text-sm">
              {comparison.shops.map((shop) => (
                <div
                  key={shop.name}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-gray-600">{shop.name}</span>
                  <span
                    className={
                      shop.price === minPrice
                        ? 'font-bold text-blue-600'
                        : 'text-gray-900'
                    }
                  >
                    {shop.price.toLocaleString()}원
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs text-gray-500">
              최대 {priceDiff.toLocaleString()}원 차이
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function PriceComparison() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              가격 비교하고 예약하기
            </h2>
            <p className="text-gray-600">
              동일 장비도 대여점마다 가격이 다릅니다.
              <br />
              최저가로 예약하세요.
            </p>
          </div>
          <Link
            href="/compare"
            className="text-sm text-blue-600 transition-colors hover:text-blue-700"
          >
            더 많은 비교 →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {PRICE_COMPARISON_ITEMS.map((comparison) => (
            <ComparisonCard key={comparison.id} comparison={comparison} />
          ))}
        </div>
      </div>
    </section>
  );
}
