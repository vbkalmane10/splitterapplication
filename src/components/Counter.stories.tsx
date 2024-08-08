import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Counter, { CounterProps } from "./Counter";

const meta: Meta = {
  title: "Components/Counter",
  component: Counter,
};

export default meta;

const Template: StoryFn<CounterProps> = (args) => {
  const [value, setValue] = useState(args.value || 0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Counter
      value={value}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onChange={handleChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 0,
  onIncrement: () => {},
  onDecrement: () => {},
  onChange: () => {},
};
