import React from "react";
import { SubmitButton } from "./SubmitButton";

export default {
  title: "Example/SubmitButton",
  component: SubmitButton,
  argTypes: {
    name: "",
  },
};

const Template = (args) => <SubmitButton {...args} />;

export const Submit = Template.bind({});

Submit.args = {
  name: "Submit",
};
