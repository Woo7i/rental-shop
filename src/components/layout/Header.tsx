import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          렌탈샵 비교
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/shops" className="hover:text-gray-600">
            렌탈샵 목록
          </Link>
          <Link href="/compare" className="hover:text-gray-600">
            가격 비교
          </Link>
          <Link href="/reviews" className="hover:text-gray-600">
            리뷰
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="rounded-md px-4 py-2 hover:bg-gray-100">
            로그인
          </button>
          <button className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800">
            회원가입
          </button>
        </div>
      </div>
    </header>
  );
}
