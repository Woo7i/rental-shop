// 메인 카테고리(상위)
export const MAIN_CATEGORIES = ['카메라', '렌즈', '조명', '음향'] as const;
export type MainCategory = (typeof MAIN_CATEGORIES)[number];

// 카메라 타입(성능/세부)
export const CAMERA_TYPES = [
  '전체',
  'Packages',
  'DSLR',
  'Mirrorless',
  'Camcorder',
  'Phone',
  'VR Camera',
  'Action Cam',
  'Drone',
  'Etc',
] as const;
export type CameraType = (typeof CAMERA_TYPES)[number];

// 렌즈 타입
export const LENS_TYPES = [
  '전체',
  '단렌즈',
  '줌렌즈',
  '시네렌즈',
  'Etc',
] as const;
export type LensType = (typeof LENS_TYPES)[number];

// 조명 타입
export const LIGHT_TYPES = ['전체', 'LED', '스트로보', '튜브', 'Etc'] as const;
export type LightType = (typeof LIGHT_TYPES)[number];

// 음향 타입
export const AUDIO_TYPES = ['전체', '마이크', '레코더', '믹서', 'Etc'] as const;
export type AudioType = (typeof AUDIO_TYPES)[number];
