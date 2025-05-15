import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';

export default function LoginPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex w-[440px] flex-col items-center py-24">
        {/* 상단 서비스 설명 */}
        <div className="mb-14 text-start">
          <h1 className="mb-6 text-3xl font-bold leading-snug">
            로그인하면, <span className="text-[#4C6EF5]">찜</span>을 통해
            <span className="text-[#4C6EF5]"> 원하는 렌탈샵 정보</span>를 쉽고
            빠르게 비교할 수 있어요!
          </h1>
          <p className="text-lg text-gray-600">
            다양한 촬영 장비 렌탈샵의 가격, 위치를 한눈에 비교하세요.
            <br />
            투명한 정보를 통한 현명한 선택을 도와드립니다.
          </p>
        </div>
        {/* 소셜 로그인 버튼 */}
        <div className="flex w-full flex-col gap-6">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-2xl border border-gray-200 bg-white py-5 text-xl font-medium shadow-sm transition hover:bg-gray-50"
          >
            <FcGoogle className="mr-3 h-7 w-7" />
            구글로 로그인
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-2xl bg-green-400 py-5 text-xl font-medium text-white shadow-sm transition hover:bg-green-500"
          >
            <SiNaver className="mr-3 h-6 w-6" />
            네이버로 로그인
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-2xl bg-yellow-300 py-5 text-xl font-medium text-black shadow-sm transition hover:bg-yellow-400"
          >
            <RiKakaoTalkFill className="mr-3 h-7 w-7" />
            카카오로 로그인
          </button>
        </div>
      </div>
    </section>
  );
}
