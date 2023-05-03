import React from 'react';
import {StyleSheet, Text,Pressable, GestureResponderEvent} from 'react-native';

export type Props = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const PrimaryButton: React.FC<Props> = ({
  title = 'Add a title property to replace',
  onPress,
}) => {


  return (
    <Pressable style={styles.button} onPress={onPress}>
       <Text style={styles.text}>{title}</Text>
     </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333333',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  text: {
    color: '#ffffff',
    fontSize: 20
  }
});

export default PrimaryButton;