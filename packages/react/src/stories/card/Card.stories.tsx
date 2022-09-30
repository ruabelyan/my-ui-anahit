/* eslint-disable import/no-extraneous-dependencies */
import { Card } from '@/components/card';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Card`,
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  presets: 'danger',
  children: 'Hello',
};
