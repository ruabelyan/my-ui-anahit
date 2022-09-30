// import { themeStore } from '@core/store';

const calculateRem = (px: number) => {
  const remSize = 16;

  return `${px / remSize}rem`;
};

export default calculateRem;
