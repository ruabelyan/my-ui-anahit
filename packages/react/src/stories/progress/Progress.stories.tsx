/* eslint-disable import/no-extraneous-dependencies */
import { Progress } from '@/components/progress';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Progress`,
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = args => (
  <Progress {...args} />
);

export const Default = Template.bind({});

Default.args = {
  progressBarProps: {
    bg: 'primary-300',
  },
};
