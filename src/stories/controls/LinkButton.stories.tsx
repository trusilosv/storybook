import React from 'react';
import { LinkButton } from './LinkButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Controls/LinkButton',
  component:  LinkButton,
} as ComponentMeta<typeof LinkButton>

const Template :ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Text = Template.bind({});

Text.args = {
  name: 'Link',
  href: ""
};

export const Contained = Template.bind({});
Contained.args = {
  name: 'LinkButton',
  variant : "contained",
  href: ""
};


