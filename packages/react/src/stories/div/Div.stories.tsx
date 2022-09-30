/* eslint-disable import/no-extraneous-dependencies */
import { Div } from '@/index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Div`,
  component: Div,
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = args => <Div {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Div',
};
