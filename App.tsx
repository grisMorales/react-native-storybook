import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from "react-native";
import Constants from "expo-constants";
import Button from "./components/atoms/Button/Button";


const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title="Click Me!"
        onPress={() => Alert.alert('Button Pressed!')}
      />
    </View>
  );
}
let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
