import { MainCategory } from './categories';

export const CATEGORY_INFO: Record<
  MainCategory,
  { title: string; description: string }
> = {
  카메라: {
    title: '카메라 장비',
    description: '다양한 카메라 장비를 검색하고 비교해보세요.',
  },
  렌즈: {
    title: '렌즈 장비',
    description: '다양한 렌즈를 검색하고 비교해보세요.',
  },
  조명: {
    title: '조명 장비',
    description: '다양한 조명 장비를 검색하고 비교해보세요.',
  },
  음향: {
    title: '음향 장비',
    description: '다양한 음향 장비를 검색하고 비교해보세요.',
  },
};
