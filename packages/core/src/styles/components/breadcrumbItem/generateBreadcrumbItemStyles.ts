import { BreadcrumbItemProps } from '@core/components-props';
import { coreLibsStore, themeStore } from '@core/store';
import {
  CSS_VARIABLE_THEMES,
  generateStylesWithCSSVariable,
} from '@core/styles/shared';
import { changeComponentProps } from '../shared';
import getBreadcrumbItemDefaultProps from './getBreadcrumbItemDefaultProps';
import { flex } from '@core/styles/shared/mixins';

const generateBreadcrumbItemStyles = (
  breadcrumbItemProps: BreadcrumbItemProps,
) => {
  const { css } = coreLibsStore.getValue();
  const { colors } = themeStore.getValue();

  const breadcrumbItemDefaultProps = getBreadcrumbItemDefaultProps();

  breadcrumbItemProps = changeComponentProps({
    componentName: 'BreadcrumbItem',
    componentProps: breadcrumbItemProps,
    componentDefaultProps: breadcrumbItemDefaultProps,
  });

  const { startContentProps, endContentProps, disabledColor } =
    breadcrumbItemProps;

  return {
    Breadcrumb: css`
      ${flex(undefined, undefined)};
      &:hover {
        cursor: pointer;
      }
    `,
    startContentProps,
    endContentProps,
    DisabledBreadcrumb: css`
      ${generateStylesWithCSSVariable({
        propertyName: 'color',
        propertyKey: disabledColor,
        themeName: CSS_VARIABLE_THEMES.color,
        propertyValue: disabledColor && colors[disabledColor],
      })};
      pointer-events: none;
    `,
  };
};

export default generateBreadcrumbItemStyles;
