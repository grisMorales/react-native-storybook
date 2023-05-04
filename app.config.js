export default ({ config }) => ({
  ...config,
  name: "React Native Design System",
  slug: "react-native-design-system",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
