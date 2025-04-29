import Link from 'next/link';
import { Moon } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/shops', label: '렌탈샵 목록' },
  { href: '/categories', label: '장비 카테고리' },
  { href: '/compare', label: '비교하기' },
  { href: '/reviews', label: '리뷰' },
] as const;

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-[#333333]">
          렌탈샵
        </Link>

        <nav className="flex flex-1 items-center justify-center gap-12 pr-8">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[#333333] transition-colors hover:text-gray-600"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="rounded-md bg-[#4C6EF5] px-4 py-2 text-white transition-colors hover:bg-[#4263eb]">
            로그인
          </button>
          <button className="rounded-md bg-[#4C6EF5] px-4 py-2 text-white transition-colors hover:bg-[#4263eb]">
            회원가입
          </button>
          <button className="flex items-center gap-1 rounded-md px-3 py-2 text-[#333333] transition-colors hover:bg-gray-100">
            <Moon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
