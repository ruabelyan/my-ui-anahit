/* eslint-disable import/no-extraneous-dependencies */
import { Div } from '@/components';
import { Input } from '@/components/input';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

const IconForTest = (
  <svg
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 248.35 234.26"
  >
    <path
      d="M10,234.26H238.4a10.34,10.34,0,0,0,7.8-3.42,8.43,8.43,0,0,0,2.08-6.72,125.68,125.68,0,0,0-66.15-95.05,81.88,81.88,0,0,1-115.91,0A125.63,125.63,0,0,0,.07,224.12a8.45,8.45,0,0,0,2.08,6.72A10.34,10.34,0,0,0,10,234.26Z"
      fill="currentColor"
    />
    <path d="M72.7,120c1.33,1.4,2.72,2.73,4.17,4a70.66,70.66,0,0,0,94.61,0c1.44-1.29,2.84-2.62,4.17-4s2.62-2.82,3.84-4.32a71.12,71.12,0,1,0-110.63,0C70.07,117.22,71.37,118.64,72.7,120Z" />
  </svg>
);

export default {
  title: `${TITLES.MAIN_TITLE}/Input`,
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => (
  <>
    <Input {...args}>Input</Input>

    <br />
    <br />

    <Input
      presets={['secondary2', 'md']}
      endContent={IconForTest}
      inputProps={{ placeholder: 'Placeholder' }}
      endButtonContent="EndButton"
      startButtonContent="StartButton"
    />

    <br />
    <br />

    <Input
      presets={['warning', 'md']}
      startContent={IconForTest}
      endContent={IconForTest}
      message={
        <Div display="flex" align="center">
          <Div
            width="10px"
            height="10px"
            radius="circle"
            bg="white"
            borderColor="warning-300"
            borderStyle="solid"
            borderWidth="1px"
            display="flex"
            align="center"
            justify="center"
            color="warning-300"
            margin={{ r: '2' }}
          >
            !
          </Div>
          <Div color="neutral-400" component="span">
            Warning Message
          </Div>
        </Div>
      }
      inputProps={{ placeholder: 'Placeholder' }}
    />

    <br />
    <br />
    <Input
      presets={['warning', 'md']}
      startContent={IconForTest}
      endContent={IconForTest}
      message={
        <Div display="flex" align="center">
          <Div
            width="10px"
            height="10px"
            radius="circle"
            bg="warning-300"
            display="flex"
            align="center"
            justify="center"
            color="white"
            margin={{ r: '2' }}
          >
            !
          </Div>
          <Div color="neutral-400" component="span">
            Warning Message
          </Div>
        </Div>
      }
      inputProps={{ placeholder: 'Placeholder' }}
    />

    <br />
    <br />
    <Input
      presets={['danger', 'xl']}
      startContent={IconForTest}
      label="Label"
      endContent={IconForTest}
      endButtonContent="EndButton"
      startButtonContent="StartButton"
      message={
        <Div display="flex" align="center">
          <Div
            width="10px"
            height="10px"
            radius="circle"
            bg="danger-300"
            display="flex"
            align="center"
            justify="center"
            color="white"
            margin={{ r: '2' }}
          >
            !
          </Div>
          <Div color="neutral-400" component="span">
            Danger Message
          </Div>
        </Div>
      }
      inputProps={{ placeholder: 'Placeholder' }}
    />

    <br />
    <br />
    <Input
      message={
        <Div display="flex" align="center">
          <Div
            width="10px"
            height="10px"
            radius="circle"
            bg="success-400"
            display="flex"
            align="center"
            justify="center"
            color="white"
            margin={{ r: '2' }}
            component="span"
          >
            !
          </Div>
          <Div color="neutral-400" component="span">
            Success Message
          </Div>
        </Div>
      }
      inputProps={{ placeholder: 'Placeholder' }}
      presets={['success', 'xl']}
    />
    <br />
    <br />

    <Input
      disabled
      bg="neutral-200"
      inputProps={{ placeholder: 'Placeholder' }}
    />
  </>
);

export const Default = Template.bind({});

Default.args = {
  presets: ['secondary2', 'xl'],

  label: 'Label',

  startContent: IconForTest,

  endContent: IconForTest,

  inputProps: {
    placeholder: 'Placeholder',
  },
  message: (
    <Div display="flex" align="center">
      <Div
        width="10px"
        height="10px"
        radius="circle"
        bg="success-400"
        display="flex"
        align="center"
        justify="center"
        color="white"
        margin={{ r: '2' }}
        component="span"
      >
        !
      </Div>
      <Div color="neutral-400" component="span">
        Success Message
      </Div>
    </Div>
  ),
};
