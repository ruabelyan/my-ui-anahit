import { TooltipProps } from '@my-ui/core';

export interface GetTooltipPositionArguments {
  placement: TooltipProps['placement'];
  element: HTMLElement;
  spacing?: number;
  cornerSpacing?: number;
  tooltipElement: HTMLElement;
}

const getTooltipPosition = ({
  placement,
  element,
  spacing = 10,
  cornerSpacing = 45,
  tooltipElement,
}: GetTooltipPositionArguments) => {
  const elementInfo = element.getBoundingClientRect();

  let x: number | null = null;
  let y: number | null = null;

  switch (placement) {
    case 'top':
      x =
        elementInfo.x +
        element.clientWidth / 2 -
        tooltipElement.clientWidth / 2;
      y = elementInfo.y - tooltipElement.clientHeight - spacing;
      break;
    case 'topLeft':
      x = elementInfo.x - tooltipElement.clientWidth + cornerSpacing;
      y = elementInfo.y - tooltipElement.clientHeight - spacing;
      break;
    case 'topRight':
      x = elementInfo.x + element.clientWidth - cornerSpacing;
      y = elementInfo.y - tooltipElement.clientHeight - spacing;
      break;
    case 'bottom':
      x =
        elementInfo.x +
        element.clientWidth / 2 -
        tooltipElement.clientWidth / 2;
      y = elementInfo.y + element.clientHeight + spacing;
      break;
    case 'bottomLeft':
      x = elementInfo.x - tooltipElement.clientWidth + cornerSpacing;
      y = elementInfo.y + element.clientHeight + spacing;
      break;
    case 'bottomRight':
      x = elementInfo.x + element.clientWidth - cornerSpacing;
      y = elementInfo.y + element.clientHeight + spacing;
      break;
    case 'left':
      x = elementInfo.x - element.clientWidth - spacing;
      y =
        elementInfo.x +
        element.clientHeight / 2 -
        tooltipElement.clientHeight / 2;
      break;
    case 'leftBottom':
      x = elementInfo.x - element.clientWidth - spacing;
      y = elementInfo.x + element.clientHeight - cornerSpacing;
      break;
    case 'leftTop':
      x = elementInfo.x - element.clientWidth - spacing;
      y = elementInfo.x - tooltipElement.clientHeight + cornerSpacing;
      break;
    case 'right':
      x = elementInfo.x + element.clientWidth + spacing;
      y =
        elementInfo.x +
        element.clientHeight / 2 -
        tooltipElement.clientHeight / 2;
      break;
    case 'rightTop':
      x = elementInfo.x + element.clientWidth + spacing;
      y = elementInfo.x - tooltipElement.clientHeight + cornerSpacing;
      break;
    case 'rightBottom':
      x = elementInfo.x + element.clientWidth + spacing;
      y = elementInfo.x + element.clientHeight - cornerSpacing;
      break;
    default:
      x =
        elementInfo.x +
        element.clientWidth / 2 -
        tooltipElement.clientWidth / 2;
      y = elementInfo.y + element.clientHeight + spacing;
      break;
  }

  return { x, y };
};

export default getTooltipPosition;
