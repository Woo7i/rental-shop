import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const QUICK_LINKS = [
  { href: '/', label: '홈' },
  { href: '/shops', label: '렌탈샵 목록' },
  { href: '/categories', label: '장비 카테고리' },
  { href: '/compare', label: '비교하기' },
] as const;

const SUPPORT_LINKS = [
  { href: '/faq', label: '자주 묻는 질문' },
  { href: '/guide', label: '이용 가이드' },
  { href: '/contact', label: '문의하기' },
] as const;

const LEGAL_LINKS = [
  { href: '/terms', label: '이용약관' },
  { href: '/privacy', label: '개인정보처리방침' },
] as const;

const SOCIAL_LINKS = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Instagram, label: 'Instagram' },
] as const;

interface FooterLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, className = '', children }: FooterLinkProps) => (
  <Link
    href={href}
    className={`text-gray-300 transition-colors hover:text-white ${className}`}
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-[#333333] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <h3 className="mb-4 text-xl font-bold">렌탈샵 비교 플랫폼</h3>
            <p className="mb-4 text-gray-300">
              다양한 촬영 장비 렌탈 업체들의 정보를 한 곳에서 비교하세요
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">바로가기</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">고객 지원</h3>
            <ul className="space-y-2">
              {SUPPORT_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">법적 정보</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-600 pt-8 md:flex-row">
          <p className="text-gray-300">
            © {new Date().getFullYear()} 렌탈샵 비교 플랫폼. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <FooterLink key={label} href={href}>
                <span className="sr-only">{label}</span>
                <Icon size={20} />
              </FooterLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
