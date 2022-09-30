/* eslint-disable import/no-extraneous-dependencies */
import { Dot } from '@/components/dot';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Dot`,
  component: Dot,
} as ComponentMeta<typeof Dot>;

const Template: ComponentStory<typeof Dot> = args => (
  <>
    <Dot presets={['primary', 'xs']} {...args} />
    <br />
    <Dot presets={['primary', 'sm']} {...args} />
    <br />
    <Dot presets={['md']} {...args}>
      166K
    </Dot>
    <br />
    <Dot presets={['danger', 'md']} {...args} />
    <br />
    <Dot presets={['primary', 'lg']} {...args} />
    <br />
    <Dot presets={['primary', 'xlg']} shadow="sm" {...args} />
    <br />
    <Dot {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = { children: '' };
