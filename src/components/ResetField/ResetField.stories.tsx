import { StoryFn, Meta } from "@storybook/react";
import ResetField from "./ResetField";

export default {
  title: "Components/ResetField",
  component: ResetField,
} as Meta;

const Template: StoryFn = (args) => (
  <ResetField label1="Tip Amount" label2="person" price="0.00" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
