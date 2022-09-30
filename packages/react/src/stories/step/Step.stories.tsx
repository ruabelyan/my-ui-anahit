/* eslint-disable import/no-extraneous-dependencies */
import { Step } from '@/components';
import { Div } from '@/index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Step`,
  component: Step,
} as ComponentMeta<typeof Step>;

const Template: ComponentStory<typeof Step> = args => (
  <Div display="flex" flexDir="column">
    <Step
      {...args}
      title="Step 1"
      presets={['primary', 'disabled', 'horizontal']}
    >
      1
    </Step>
    <br />
    <Step
      {...args}
      clickable
      title="Step 2"
      description="Step description"
      presets={['outlined-danger', 'vertical']}
    >
      2
    </Step>
    <br />
    <Step {...args} presets={['outlined-danger', 'disabled']}>
      3
    </Step>
    <br />
    <Step {...args} clickable>
      4
    </Step>
    <br />
    <Step {...args}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
      >
        <path
          d="M3.22883 8C2.94497 8.00013 2.67274 7.8751 2.47219 7.65247L0.184609 5.1183C-0.0615362 4.84543 -0.0615362 4.40311 0.184609 4.13024C0.430832 3.85746 0.829961 3.85746 1.07618 4.13024L3.22883 6.51582L8.92382 0.204585C9.17004 -0.068195 9.56917 -0.068195 9.81539 0.204585C10.0615 0.477453 10.0615 0.91977 9.81539 1.19264L3.98547 7.65247C3.78492 7.8751 3.51269 8.00013 3.22883 8Z"
          fill="white"
        />
      </svg>
    </Step>
    <br />
  </Div>
);

export const Default = Template.bind({});

Default.args = {};
