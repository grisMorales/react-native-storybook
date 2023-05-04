import  Button  from "./Button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
  argTypes: {
    onPress: { action: "onPress" },
  }
};

export const Primary = {
  args: {
    title: 'I\'m a button!'
  },
};

export const Secondary = {
  args: {
    title: 'I\'m a button!',
    role: 'secondary'
  },
};
