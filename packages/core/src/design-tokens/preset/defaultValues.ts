import {
  avatarDefaultPresets,
  badgeDefaultPresets,
  breadcrumbDefaultPresets,
  breadcrumbItemDefaultPresets,
  buttonDefaultPresets,
  cardDefaultPresets,
  checkboxDefaultPresets,
  dotDefaultPresets,
  inputDefaultPresets,
  inputWithButtonDefaultPresets,
  popUpDefaultPresets,
  progressDefaultPresets,
  radioDefaultPresets,
  stepDefaultPresets,
  switchDefaultPresets,
  tooltipCardDefaultPresets,
} from '@core/styles/presets';
import { tooltipDefaultPresets } from '@core/styles/presets/tooltip';
import { PresetThemeConfig } from './types';

const presetDefaultValues: PresetThemeConfig = {
  Button: buttonDefaultPresets,
  PopUp: popUpDefaultPresets,
  Input: inputDefaultPresets,
  InputWithButton: inputWithButtonDefaultPresets,
  Switch: switchDefaultPresets,
  Card: cardDefaultPresets,
  Checkbox: checkboxDefaultPresets,
  TooltipCard: tooltipCardDefaultPresets,
  Breadcrumb: breadcrumbDefaultPresets,
  BreadcrumbItem: breadcrumbItemDefaultPresets,
  Badge: badgeDefaultPresets,
  Progress: progressDefaultPresets,
  Dot: dotDefaultPresets,
  Radio: radioDefaultPresets,
  Avatar: avatarDefaultPresets,
  Step: stepDefaultPresets,
  Tooltip: tooltipDefaultPresets,
};

export default presetDefaultValues;
