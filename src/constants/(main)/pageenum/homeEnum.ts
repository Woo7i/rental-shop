// 홈(메인)에서만 쓰는 enum/상수
export const POPULAR_CATEGORY_IDS = [
  'camera',
  'lens',
  'lighting',
  'audio',
  'stabilizer',
  'drone',
] as const;
export type PopularCategoryId = (typeof POPULAR_CATEGORY_IDS)[number];
