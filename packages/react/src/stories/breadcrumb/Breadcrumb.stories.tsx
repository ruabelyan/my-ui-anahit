/* eslint-disable import/no-extraneous-dependencies */
import { Breadcrumb } from '@/components/breadcrumb';
import { BreadcrumbItem } from '@/components/breadcrumbItem';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TITLES } from '../configs';

export default {
  title: `${TITLES.MAIN_TITLE}/Breadcrumb`,
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = args => (
  <>
    <Breadcrumb
      {...args}
      // TODO: Should be fixed after iconography creation
      separator={
        <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4.5L10 8.5L6 12.5" stroke="#454545" />
        </svg>
      }
    >
      <BreadcrumbItem>Item 1</BreadcrumbItem>
      <BreadcrumbItem>Item 2</BreadcrumbItem>
      <BreadcrumbItem>Item 3</BreadcrumbItem>
      <BreadcrumbItem disabled>Item 4</BreadcrumbItem>
    </Breadcrumb>
    <br />
    <br />
    <Breadcrumb
      {...args}
      // TODO: Should be fixed after iconography creation
      separator={
        <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4.5L10 8.5L6 12.5" stroke="#454545" />
        </svg>
      }
    >
      <BreadcrumbItem>Item 1</BreadcrumbItem>
      <BreadcrumbItem>Item 2</BreadcrumbItem>
      <BreadcrumbItem>Item 3</BreadcrumbItem>
      <BreadcrumbItem disabled>Item 4</BreadcrumbItem>
    </Breadcrumb>
  </>
);

export const Default = Template.bind({});

Default.args = {};
