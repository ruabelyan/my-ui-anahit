/* eslint-disable import/no-extraneous-dependencies */
import { Div } from '@/components';
import { Tooltip } from '@/components/tooltip';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Tooltip`,
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => (
  <Div margin="250px">
    <Tooltip spacing={15} {...args}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '200px',
          height: '100px',
          background: '#F0F0F7',
          borderRadius: '25px',
        }}
      >
        Hello
      </div>
    </Tooltip>
  </Div>
);

export const Default = Template.bind({});

Default.args = {
  eventForShow: 'hover',
  placement: 'bottom',
  tooltipCardProps: {
    radius: 'sm',
    presets: ['primary', 'md'],
  },
  tooltipContent: <div>HIII</div>,
};
