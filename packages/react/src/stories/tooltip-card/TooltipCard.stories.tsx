/* eslint-disable import/no-extraneous-dependencies */
import { TooltipCard } from '@/components/tooltip-card';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/TooltipCard`,
  component: TooltipCard,
} as ComponentMeta<typeof TooltipCard>;

const Template: ComponentStory<typeof TooltipCard> = args => (
  <TooltipCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  presets: ['danger', 'md', 'right'],
  radius: 'md',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqu   ad minimistLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqu   ad minimistLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqu   ad minimistLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqu   ad minimistLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqu   ad minimistLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqu   ad minimist',
};
