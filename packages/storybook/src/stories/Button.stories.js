import React from "react";
import Button from "../components/Button";

const Template = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = { backgroundColor: "dodgerblue", width:"250px" };

export const Secondary = Template.bind({});
Secondary.args = { backgroundColor: "transparent", borderColor:"dodgerblue", width:"250px"};

export default {
  title: "GroupName/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
    width: {control: "text"}
  }
};
