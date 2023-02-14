import { ComponentStory } from "@storybook/react";
import React from "react";

import { GeneralButton } from "./GeneralButton";

export default {
  title: "Example/GeneralButton",
  component: GeneralButton,
  argTypes: {
    variant: {
      description: "Button kinds",
      options: ["submit", "link", "navigate", "loading", "logout"],
      control: {
        type: "radio",
      },
    },
    name: {
      description: "Button name variants",
      options: ["Submit", "Link", "Navigate", "Loading...", "Logout"],
      control: {
        type: "radio",
      },
    },
    submit: {
      description: "Button types (Submit or Button)",
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    onClick: () => {},
    aria: {
      description: "Aria-labels",
      options: [
        "Submit Button",
        "Navigate Button",
        "Link Button",
        "Button",
        "Logout Button",
      ],
      control: {
        type: "radio",
      },
    },
    href: "",
    disabled: {
      options: [true, false],
      control: {
        type: "radio",
      },
    },
  },
};
// as Meta

const Template: ComponentStory<typeof GeneralButton> = (args: any) => (
  <GeneralButton {...args} />
);

export const Submit = Template.bind({});

Submit.args = {
  submit: true,
  name: "Submit",
  variant: "submit",
  onClick: () => {},
  aria: "Submit Button",
  href: "",
  disabled: false,
};

// export const Navigate = Template.bind({});

// Navigate.args = {
//   submit: false,
//   name: "Navigate",
//   variant: "navigate",
//   onClick: () => {},
//   aria: "Navigate Button",
//   href: "",
//   disabled: false,
// };

// export const Link = Template.bind({});

// Link.args = {
//   submit: false,
//   name: "Link",
//   variant: "link",
//   onClick: () => {},
//   aria: "Link Button",
//   href: "",
//   disabled: false,
// };

// export const Loading = Template.bind({});

// Loading.args = {
//   submit: false,
//   name: "Loading...",
//   variant: "loading",
//   onClick: () => {},
//   aria: "Button",
//   href: "",
//   disabled: true,
// };

// export const Logout = Template.bind({});

// Logout.args = {
//   submit: false,
//   name: "Logout",
//   variant: "logout",
//   onClick: () => {},
//   aria: "Navigate Button",
//   href: "",
//   disabled: false,
// };
