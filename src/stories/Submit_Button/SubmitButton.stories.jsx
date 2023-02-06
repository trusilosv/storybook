import React from "react";
import { ButtonSubmit } from "./SubmitButton";

export default {
  title: "Example/ButtonSubmit",
  component: ButtonSubmit,
  argTypes: {
    name: "",
  },
};

const Template = (args) => <ButtonSubmit {...args} />;

export const Submit = Template.bind({});

Submit.args = {
  name: "Submit",
};
