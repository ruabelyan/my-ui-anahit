/* eslint-disable import/no-extraneous-dependencies */
import { Radio } from '@/components/radio';
import { Div } from '@/index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Radio`,
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = args => (
  <Div>
    <Radio {...args} checkedContent={<Div component="span" />} />
    <br />
    <Radio {...args} label="Text" />
  </Div>
);

export const Default = Template.bind({});

Default.args = {};
