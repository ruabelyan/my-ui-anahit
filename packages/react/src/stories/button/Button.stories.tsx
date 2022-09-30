/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@/components/button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Button`,
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  // TODO: Fix after iconography
  startContent: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 248.35 234.26"
    >
      <path
        d="M10,234.26H238.4a10.34,10.34,0,0,0,7.8-3.42,8.43,8.43,0,0,0,2.08-6.72,125.68,125.68,0,0,0-66.15-95.05,81.88,81.88,0,0,1-115.91,0A125.63,125.63,0,0,0,.07,224.12a8.45,8.45,0,0,0,2.08,6.72A10.34,10.34,0,0,0,10,234.26Z"
        fill="currentColor"
      />
      <path d="M72.7,120c1.33,1.4,2.72,2.73,4.17,4a70.66,70.66,0,0,0,94.61,0c1.44-1.29,2.84-2.62,4.17-4s2.62-2.82,3.84-4.32a71.12,71.12,0,1,0-110.63,0C70.07,117.22,71.37,118.64,72.7,120Z" />
    </svg>
  ),
  // TODO: Fix after iconography
  endContent: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 248.35 234.26"
    >
      <path
        d="M10,234.26H238.4a10.34,10.34,0,0,0,7.8-3.42,8.43,8.43,0,0,0,2.08-6.72,125.68,125.68,0,0,0-66.15-95.05,81.88,81.88,0,0,1-115.91,0A125.63,125.63,0,0,0,.07,224.12a8.45,8.45,0,0,0,2.08,6.72A10.34,10.34,0,0,0,10,234.26Z"
        fill="currentColor"
      />
      <path d="M72.7,120c1.33,1.4,2.72,2.73,4.17,4a70.66,70.66,0,0,0,94.61,0c1.44-1.29,2.84-2.62,4.17-4s2.62-2.82,3.84-4.32a71.12,71.12,0,1,0-110.63,0C70.07,117.22,71.37,118.64,72.7,120Z" />
    </svg>
  ),
  presets: ['outlined-danger', 'md'],
};
