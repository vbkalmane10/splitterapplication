import { Meta, StoryFn } from "@storybook/react";
import CounterApp from "./CounterApp";

export default {
  title: "Components/CounterApp",
  component: CounterApp,
} as Meta;

const Template: StoryFn = (args) => <CounterApp {...args} />;

export const Default = Template.bind({});
Default.args = {};
