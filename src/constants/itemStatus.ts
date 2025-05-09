// 장비 상태
export const ITEM_STATUS = ['대여 가능', '대여 중', '점검 중'] as const;
export type ItemStatus = (typeof ITEM_STATUS)[number];
