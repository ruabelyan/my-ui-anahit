/* eslint-disable import/no-extraneous-dependencies */
import { Badge } from '@/components/badge';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';
import { Dot } from '@/components/dot';
import { Div } from '@/components';

export default {
  title: `${TITLES.MAIN_TITLE}/Badge`,
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => (
  <Badge
    badgeContent={<Dot presets={['primary', 'xlg']} />}
    presets={['top-right']}
    {...args}
  >
    <Div
      width="100px"
      height="100px"
      borderColor="primary-200"
      borderStyle="solid"
      radius="lg"
      display="flex"
      justify="center"
      align="center"
    >
      Children
    </Div>
  </Badge>
);

export const Default = Template.bind({});

Default.args = {};
