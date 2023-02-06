import React from "react";
import { LogoutButton } from "./LogoutButton";

export default {
  title: "Example/LogoutButton",
  component: LogoutButton,
  argTypes: {
    logoutPath: "",
    token: "",
  },
};

const Template = (args) => <LogoutButton {...args} />;

export const Logout = Template.bind({});

Logout.args = {
  variant: "text",
  name: "Link",
  href: "",
};
