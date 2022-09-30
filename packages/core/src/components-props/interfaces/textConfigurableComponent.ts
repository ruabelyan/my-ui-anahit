import CSS from 'csstype';
import {
  FontType,
  ResponsiveValueType,
  TextSizeType,
  TextWeightType,
  TypographyType,
} from '../types';

export interface BaseTypographyConfigurableProps {
  textSize?: ResponsiveValueType<TextSizeType>;
  textWeight?: TextWeightType;
  fontFamily?: FontType;
  lineHeight?: CSS.Properties['lineHeight'];
  letterSpacing?: CSS.Properties['letterSpacing'];
}
export interface TextConfigurableComponent
  extends BaseTypographyConfigurableProps {
  typography?: TypographyType;

  textAlign?: ResponsiveValueType<CSS.Properties['textAlign']>;
  textStyle?: CSS.Properties['fontStyle'];
  textDecor?: CSS.Properties['textDecoration'];
  textTransform?: CSS.Properties['textTransform'];
}
