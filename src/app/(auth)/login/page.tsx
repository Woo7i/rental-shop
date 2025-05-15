import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';

export default function LoginPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">로그인</h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            로그인
          </button>
        </form>
        <div className="mt-4 flex justify-between text-sm">
          <Link href="/register" className="text-blue-600 hover:underline">
            회원가입
          </Link>
          <Link
            href="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            비밀번호 찾기
          </Link>
        </div>
        {/* 소셜 로그인 */}
        <div className="mt-8">
          <div className="mb-4 flex items-center">
            <div className="h-px flex-grow bg-gray-200" />
            <span className="mx-2 text-sm text-gray-400">
              또는 소셜 계정으로 로그인
            </span>
            <div className="h-px flex-grow bg-gray-200" />
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 transition hover:bg-gray-50"
            >
              <FcGoogle className="mr-2 h-6 w-6" />
              <span className="font-medium">구글로 로그인</span>
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-yellow-300 bg-yellow-300 py-2 transition hover:bg-yellow-400"
            >
              <RiKakaoTalkFill className="mr-2 h-6 w-6 text-black" />
              <span className="font-medium text-black">카카오로 로그인</span>
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-green-600 bg-green-600 py-2 transition hover:bg-green-700"
            >
              <SiNaver className="mr-2 h-4 w-4 text-white" />
              <span className="font-medium text-white">네이버로 로그인</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
