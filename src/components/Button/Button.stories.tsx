
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button label="RESET" {...args} />;

export const Default = Template.bind({});
Default.args = {};
