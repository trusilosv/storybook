import React from "react";

import { LinkButton } from "./LinkButton";

export default {
  title: "Example/LinkButton",
  component: LinkButton,
  argTypes: {
    variant: {
      description: "Варианты внешнего вида кнопки",
    },
    name: "Link",
    href: "href",
  },
};

const Template = (args) => <LinkButton {...args} />;

export const Text = Template.bind({});

Text.args = {
  name: "Link",
  variant: "text",
  href: "",
};

export const Contained = Template.bind({});
Contained.args = {
  name: "LinkButton",
  variant: "contained",
  href: "",
};
