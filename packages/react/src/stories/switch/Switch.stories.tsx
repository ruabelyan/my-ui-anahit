/* eslint-disable import/no-extraneous-dependencies */
import { Div } from '@/components';
import { Switch } from '@/components/switch';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Switch`,
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => {
  const indicator = (
    <Div
      width="16px"
      height="16px"
      bg="white"
      radius="circle"
      shadow="xs"
      shadowColor={['neutral-300', 'neutral-300']}
    />
  );

  return (
    <Div display="flex" flexDir="column">
      <Switch {...args} />
      <br />
      <Switch shadow="xs" shadowColor={['neutral-300', 'neutral-300']} />
      <br />
      <Switch
        height="4px"
        checkedSwitchIndicator={indicator}
        switchIndicator={indicator}
        indicatorContainerProps={{
          padding: '0',
        }}
      />
    </Div>
  );
};

export const Default = Template.bind({});

Default.args = {};
