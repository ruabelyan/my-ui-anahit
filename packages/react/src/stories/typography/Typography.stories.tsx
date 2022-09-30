/* eslint-disable import/no-extraneous-dependencies */
import { Typography } from '@/components/typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Typography`,
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Typography',
};
