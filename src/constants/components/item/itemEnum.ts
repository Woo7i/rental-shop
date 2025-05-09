// 아이템(장비) 페이지에서만 쓰는 enum/상수
// (공통 enum/상수는 src/constants/categories.ts, itemStatus.ts에서 import해서 사용)

// 필요시 이 파일에만 해당하는 특수 enum/상수만 남기세요.

// item page 및 item 컴포넌트에서 사용하는 enum/상수 데이터
// 공통 카테고리/타입/상태 등은 src/constants/categories.ts, itemStatus.ts에서 import

// 가격 옵션 (ItemFilterBar 등에서 사용)
export const ITEM_PRICE_OPTIONS = [
  '모든 가격대',
  '3만원 이하',
  '3~5만원',
  '5만원 이상',
] as const;
export type ItemPriceOption = (typeof ITEM_PRICE_OPTIONS)[number];

// 지역 옵션 (ItemFilterBar 등에서 사용)
export const ITEM_REGION_OPTIONS = ['전국', '서울', '경기', '부산'] as const;
export type ItemRegionOption = (typeof ITEM_REGION_OPTIONS)[number];

// 정렬 옵션 (ItemFilterBar 등에서 사용)
export const ITEM_SORT_OPTIONS = ['인기순', '가격 낮은순'] as const;
export type ItemSortOption = (typeof ITEM_SORT_OPTIONS)[number];

// 기타 컴포넌트별 특수 enum/상수는 필요시 여기에 추가
