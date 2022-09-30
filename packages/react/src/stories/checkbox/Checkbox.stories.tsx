/* eslint-disable import/no-extraneous-dependencies */
import { Checkbox } from '@/components/checkbox';
import { Div } from '@/index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Checkbox`,
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
  <Div display="flex" flexDir="column">
    <Checkbox
      {...args}
      checkedContent={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 14 10.11"
          fill="#fff"
        >
          <path d="M4.52 10.11a1.5 1.5 0 0 1-1.06-.44l-3.2-3.2a.88.88 0 0 1 0-1.25.88.88 0 0 1 1.25 0l3 3 8-8a.88.88 0 0 1 1.25 0 .88.88 0 0 1 0 1.25l-8.18 8.2a1.5 1.5 0 0 1-1.06.44Z" />
        </svg>
      }
    />
    <br />
    <Checkbox
      {...args}
      checkedContent={
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 3" fill="none">
          <path
            d="M1.33325 1.5H10.6666"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    />
  </Div>
);

export const Default = Template.bind({});

Default.args = {};
