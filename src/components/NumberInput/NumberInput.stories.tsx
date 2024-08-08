import { StoryFn, Meta } from "@storybook/react";
import { useState, useCallback } from "react";
import NumberInput from "./NumberInput";

export default {
  title: "Components/NumberInput",
  component: NumberInput,
} as Meta;

const Template: StoryFn = (args) => {
  const [value, setValue] = useState(args.value);
  const [error, setError] = useState(value < 0);

  const handleInputChange = useCallback((newValue: number) => {
    setValue(newValue);
    setError(newValue <= 0);
  }, []);

  return (
    <NumberInput
      label={""}
      typeofIcon={"dollar"}
      {...args}
      value={value}
      onChange={handleInputChange}
      error={error}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 10,
  label: "Bill",
  typeofIcon: "dollar",
};
