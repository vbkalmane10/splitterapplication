import { StoryFn, Meta } from "@storybook/react";
import ResetDiv from "./ResetDiv";

export default {
  title: "Components/ResetDiv",
  component: ResetDiv,
} as Meta;

const Template: StoryFn = (args) => (
  <ResetDiv
    tipAmount={""}
    totalAmount={""}
    onReset={function (): void {
      throw new Error("Function not implemented.");
    }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
