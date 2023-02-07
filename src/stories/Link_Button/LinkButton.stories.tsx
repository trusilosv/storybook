import { Story } from "@storybook/react";
import React from "react";

import { LinkButton } from "./LinkButton";

export default {
  title: "Example/LinkButton",
  component: LinkButton,
  argTypes: {
    variant: {
      description: "Варианты внешнего вида кнопки",
      options: ["text", "contained", undefined],
      control: {
        type: "radio",
      },
    },
    name: {
      description: "Название кнопки",
    },
    href: "href",
  },
};
// as Meta

const Template = (args: any) => <LinkButton {...args} />;

export const Text: Story = Template.bind({});

Text.args = {
  name: "Link",
  variant: "text",
  href: "",
};

export const Contained: Story = Template.bind({});
Contained.args = {
  name: "LinkButton",
  variant: "contained",
  href: "",
};
