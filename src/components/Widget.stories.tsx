import { Meta, StoryFn } from "@storybook/react";
import { Widget, WidgetProps } from "./widget";

export default {
  title: "Components/Widget",
  component: Widget,
} as Meta;

const Template: StoryFn<WidgetProps> = (args) => <Widget {...args} />;

export const Information = Template.bind({});
Information.args = {
  type: "information",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
};
