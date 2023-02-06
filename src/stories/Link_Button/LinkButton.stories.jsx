import React from "react";

import { LinkButton } from "./LinkButton";

export default {
  title: "Example/LinkButton",
  component: LinkButton,
  argTypes: {
    variant: "text",
    name: "Link",
    href: "href",
  },
};

const Template = (args) => <LinkButton {...args} />;

export const Text = Template.bind({});

Text.args = {
  variant: "text",
  name: "Link",
  href: "",
};

export const Contained = Template.bind({});
Contained.args = {
  name: "LinkButton",
  variant: "contained",
  href: "",
};
