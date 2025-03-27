export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          촬영 장비 렌탈,
          <br />더 현명하게 비교하세요
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          다양한 렌탈샵의 가격과 리뷰를 한눈에 비교할 수 있습니다
        </p>
        <div className="flex justify-center gap-4">
          <button className="rounded-md bg-black px-8 py-3 text-white hover:bg-gray-800">
            렌탈샵 둘러보기
          </button>
          <button className="rounded-md border border-black px-8 py-3 hover:bg-gray-50">
            가격 비교하기
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="mb-4 text-xl font-bold">쉽고 빠른 비교</h3>
          <p className="text-gray-600">
            여러 렌탈샵의 가격을 한눈에 비교하고 최적의 선택을 하세요
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="mb-4 text-xl font-bold">실제 사용자 리뷰</h3>
          <p className="text-gray-600">
            실제 사용자들의 경험과 평가를 확인할 수 있습니다
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="mb-4 text-xl font-bold">투명한 정보</h3>
          <p className="text-gray-600">
            숨겨진 비용 없이 투명한 가격 정보를 제공합니다
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-gray-100 p-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">지금 바로 시작하세요</h2>
        <p className="mb-8 text-gray-600">
          무료로 가입하고 다양한 렌탈샵을 비교해보세요
        </p>
        <button className="rounded-md bg-black px-8 py-3 text-white hover:bg-gray-800">
          무료로 시작하기
        </button>
      </section>
    </div>
  );
}
