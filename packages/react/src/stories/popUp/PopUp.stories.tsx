/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import { Button, Div } from '@/components';
import { PopUp } from '@/components/popUp';
import { Typography } from '@/components/typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/PopUp`,
  component: PopUp,
} as ComponentMeta<typeof PopUp>;

const IconForTest = (
  <svg
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    fill="#5C5ABF"
    viewBox="0 0 248.35 234.26"
  >
    <path
      d="M10,234.26H238.4a10.34,10.34,0,0,0,7.8-3.42,8.43,8.43,0,0,0,2.08-6.72,125.68,125.68,0,0,0-66.15-95.05,81.88,81.88,0,0,1-115.91,0A125.63,125.63,0,0,0,.07,224.12a8.45,8.45,0,0,0,2.08,6.72A10.34,10.34,0,0,0,10,234.26Z"
      fill="#5C5ABF"
    />
    <path d="M72.7,120c1.33,1.4,2.72,2.73,4.17,4a70.66,70.66,0,0,0,94.61,0c1.44-1.29,2.84-2.62,4.17-4s2.62-2.82,3.84-4.32a71.12,71.12,0,1,0-110.63,0C70.07,117.22,71.37,118.64,72.7,120Z" />
  </svg>
);

const Template: ComponentStory<typeof PopUp> = args => {
  const [popUpOpened, setPopUpOpened] = useState(false);

  const handleEvent = () => {
    setPopUpOpened(!popUpOpened);
  };

  const handleClose = () => {
    setPopUpOpened(false);
  };
  return (
    <>
      <PopUp opened={popUpOpened} onClose={handleClose} {...args}>
        <Div display="flex" align="center" flexDir="column">
          <Div
            width="40px"
            height="40px"
            radius="xlg"
            bg="primary-200"
            display="flex"
            align="center"
            justify="center"
          >
            <Div width="20px" height="20px">
              {IconForTest}
            </Div>
          </Div>
          <Div>
            <Typography
              typography="display3-bold"
              color="black"
              margin={{ t: '8' }}
            >
              Heading
            </Typography>
          </Div>
          <Div width="950px" height="285px">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Div>
          <Div>
            <Button presets={['danger', 'lg']} onClick={handleClose}>
              Close
            </Button>
          </Div>
        </Div>
      </PopUp>
      <button type="button" onClick={handleEvent}>
        button
      </button>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  presets: ['primary', 'md', 'center'],
  isOutClick: true,
  zIndex: 1000,
  animationDuration: 300,
  closeButton: 'X',
  popUpButton: 'button',
  backgroundEffectColor: 'primary-50',
  popUpCloseButtonProps: {
    position: 'absolute',
    top: '7px',
    right: '10px',
    display: 'flex',
    align: 'center',
    justify: 'center',
  },
  popUpCloseButtonContentProps: {
    cursor: 'pointer',
    align: 'center',
    justify: 'center',
  },
};
