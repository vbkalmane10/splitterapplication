import { StoryFn, Meta } from "@storybook/react";
import SelectTip from "./SelectTip";

export default {
  title: "Components/SelectTip",
  component: SelectTip,
} as Meta;

const Template: StoryFn = () => (
  <SelectTip
    label={"Select Tip %"}
    tipValues={[5, 10, 15, 20, 50]}
    onSelect={function (): void {
      throw new Error("Function not implemented.");
    }}
    selectedTip={null}
    customError={undefined}
  />
);

export const Default = Template.bind({});
Default.args = {};
