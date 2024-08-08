
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button onClick={function (): void {
  throw new Error("Function not implemented.");
} } disabled={false} label="RESET" {...args} />;

export const Default = Template.bind({});
Default.args = {};
