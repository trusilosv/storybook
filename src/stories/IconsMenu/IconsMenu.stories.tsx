import { ComponentStory } from "@storybook/react";
import React from "react";

import { IconsMenu } from "./IconsMenu";

export default {
  title: "Example/IconsMenu",
  component: IconsMenu,
  argTypes: {
    href: "",
  },
};

const Template: ComponentStory<typeof IconsMenu> = (args: any) => (
  <IconsMenu {...args} />
);

export const Menu = Template.bind({});

Menu.args = {
  href1: "/home",
  href2: "/my_page",
  // href3: "/menu",
  // href4: "/sign_in",
  // href5: "/contacts",
};
