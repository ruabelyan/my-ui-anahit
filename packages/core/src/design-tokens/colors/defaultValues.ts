import { getColorKey } from './helpers';
import { ColorsThemeConfig } from './types';

const colorsDefaultValues: ColorsThemeConfig = {
  // BrandColor / Primary
  [getColorKey('primary', 900)]: '#24243C',
  [getColorKey('primary', 800)]: '#2E2E4D',
  [getColorKey('primary', 700)]: '#3D3E67',
  [getColorKey('primary', 600)]: '#4D4D80',
  [getColorKey('primary', 500)]: '#525289',
  [getColorKey('primary', 400)]: '#5C5D9A',
  [getColorKey('primary', 300)]: '#6667AB',
  [getColorKey('primary', 200)]: '#C7C7E8',
  [getColorKey('primary', 100)]: '#E8E8F2',
  [getColorKey('primary', 50)]: '#F0F0F7',
  // Secondary 1
  [getColorKey('secondary1', 900)]: '#102755',
  [getColorKey('secondary1', 800)]: '#15316D',
  [getColorKey('secondary1', 700)]: '#003E9C',
  [getColorKey('secondary1', 600)]: '#0047B3',
  [getColorKey('secondary1', 500)]: '#1055BD',
  [getColorKey('secondary1', 400)]: '#2867C7',
  [getColorKey('secondary1', 300)]: '#4F89E0',
  [getColorKey('secondary1', 200)]: '#7AA9EF',
  [getColorKey('secondary1', 100)]: '#D2E3FC',
  [getColorKey('secondary1', 50)]: '#E6F0FF',
  // Secondary 2
  [getColorKey('secondary2', 900)]: '#141365',
  [getColorKey('secondary2', 800)]: '#21207A',
  [getColorKey('secondary2', 700)]: '#343398',
  [getColorKey('secondary2', 600)]: '#3D3AC5',
  [getColorKey('secondary2', 500)]: '#514FC5',
  [getColorKey('secondary2', 400)]: '#6866C8',
  [getColorKey('secondary2', 300)]: '#7977D1',
  [getColorKey('secondary2', 200)]: '#B8B6F3',
  [getColorKey('secondary2', 100)]: '#CECDF1',
  [getColorKey('secondary2', 50)]: '#DADAF8',
  // Neutral
  [getColorKey('neutral', 900)]: '#141414',
  [getColorKey('neutral', 800)]: '#1F1F1F',
  [getColorKey('neutral', 700)]: '#262626',
  [getColorKey('neutral', 600)]: '#454545',
  [getColorKey('neutral', 500)]: '#595959',
  [getColorKey('neutral', 400)]: '#8C8C8C',
  [getColorKey('neutral', 300)]: '#D9D9D9',
  [getColorKey('neutral', 200)]: '#E9E8E8',
  [getColorKey('neutral', 100)]: '#F0F0F0',
  [getColorKey('neutral', 50)]: '#F5F5F5',
  // Danger
  [getColorKey('danger', 900)]: '#4D020C',
  [getColorKey('danger', 800)]: '#65020F',
  [getColorKey('danger', 700)]: '#830314',
  [getColorKey('danger', 600)]: '#A70419',
  [getColorKey('danger', 500)]: '#C10F26',
  [getColorKey('danger', 400)]: '#CF1B32',
  [getColorKey('danger', 300)]: '#EC1E39',
  [getColorKey('danger', 200)]: '#DE8C97',
  [getColorKey('danger', 100)]: '#E9B1B9',
  [getColorKey('danger', 50)]: '#F8E6E8',
  // Warning
  [getColorKey('warning', 900)]: '#A74E00',
  [getColorKey('warning', 800)]: '#BA5702',
  [getColorKey('warning', 700)]: '#DC6803',
  [getColorKey('warning', 600)]: '#F79009',
  [getColorKey('warning', 500)]: '#FF9914',
  [getColorKey('warning', 400)]: '#FCB022',
  [getColorKey('warning', 300)]: '#FEC84B',
  [getColorKey('warning', 200)]: '#FEDF89',
  [getColorKey('warning', 100)]: '#FFEBB5',
  [getColorKey('warning', 50)]: '#FFFDD8',
  // Success
  [getColorKey('success', 900)]: '#145607',
  [getColorKey('success', 800)]: '#21680C',
  [getColorKey('success', 700)]: '#338213',
  [getColorKey('success', 600)]: '#3E901D',
  [getColorKey('success', 500)]: '#499B27',
  [getColorKey('success', 400)]: '#63B741',
  [getColorKey('success', 300)]: '#63B741',
  [getColorKey('success', 200)]: '#96D87B',
  [getColorKey('success', 100)]: '#E6FBC7',
  [getColorKey('success', 50)]: '#F9FFEF',
  // White
  white: '#FFFFFF',
  // Black
  black: '#000000',
  // CSS colors
  transparent: 'transparent',
};

export const defaultStateColorNames = ['danger', 'warning', 'success'];

export const defaultColorNames = [
  'primary',
  'secondary1',
  'secondary2',
  'neutral',
  'black',
  'white',
  ...defaultStateColorNames,
] as const;

export default colorsDefaultValues;
