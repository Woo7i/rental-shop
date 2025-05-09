// PopularCategories에서 사용하는 카테고리 enum/상수 데이터

export const HOME_CATEGORY_IDS = [
  'camera',
  'lens',
  'lighting',
  'audio',
  'stabilizer',
  'drone',
] as const;
export type HomeCategoryId = (typeof HOME_CATEGORY_IDS)[number];

export const HOME_CATEGORY_NAME_MAP: Record<HomeCategoryId, string> = {
  camera: '카메라',
  lens: '렌즈',
  lighting: '조명',
  audio: '음향장비',
  stabilizer: '스태빌라이저',
  drone: '드론',
};

export const HOME_CATEGORY_IMAGE_MAP: Record<HomeCategoryId, string> = {
  camera: '/images/categories/camera.jpg',
  lens: '/images/categories/lens.jpg',
  lighting: '/images/categories/lighting.jpg',
  audio: '/images/categories/audio.jpg',
  stabilizer: '/images/categories/stabilizer.jpg',
  drone: '/images/categories/drone.jpg',
};

export const HOME_CATEGORY_HREF_MAP: Record<HomeCategoryId, string> = {
  camera: '/item?category=카메라',
  lens: '/item?category=렌즈',
  lighting: '/item?category=조명',
  audio: '/item?category=음향장비',
  stabilizer: '/item?category=스태빌라이저',
  drone: '/item?category=드론',
};
