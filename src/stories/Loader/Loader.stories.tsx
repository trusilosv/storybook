import { ComponentStory } from "@storybook/react";
import React from "react";

import { Loader } from "./Loader";

export default {
  title: "Example/Loader",
  component: Loader,
  argTypes: {
    name: {
      description: "Loader name",
      options: ["Loader", undefined],
      control: {
        type: "radio",
      },
    },
  },
};

const Template: ComponentStory<typeof Loader> = (args: any) => (
  <Loader {...args} />
);

export const Loaderrr = Template.bind({});

Loaderrr.args = {
  name: "Loader...",
};
