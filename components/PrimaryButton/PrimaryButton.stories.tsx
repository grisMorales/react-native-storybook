import  PrimaryButton  from "./PrimaryButton";

export default {
  title: "PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    onPress: { action: "onPress" },
  }
};

export const Default = {
  args: {
    title: 'I\'m a button!'
  },
};
