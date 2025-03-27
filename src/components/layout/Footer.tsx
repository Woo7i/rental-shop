export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-bold">렌탈샵 비교</h3>
            <p className="text-gray-600">
              다양한 촬영 장비 렌탈 업체들의 정보를 한 곳에서 쉽게 비교하고
              검색할 수 있는 플랫폼입니다.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-bold">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shops" className="text-gray-600 hover:text-gray-900">
                  렌탈샵 목록
                </a>
              </li>
              <li>
                <a
                  href="/compare"
                  className="text-gray-600 hover:text-gray-900"
                >
                  가격 비교
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="text-gray-600 hover:text-gray-900"
                >
                  리뷰
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">고객센터</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  문의하기
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-gray-900">
                  자주 묻는 질문
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>© 2024 렌탈샵 비교. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
