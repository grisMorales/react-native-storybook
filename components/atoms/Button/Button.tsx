import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    title,
    onPress,
    role
  } = props;

  const buttonStyle = StyleSheet.flatten([styles.button, styles[role]]);

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
       <Text style={styles.text}>{title}</Text>
     </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  text: {
    color: '#ffffff',
    fontSize: 20
  },
  primary: {
    backgroundColor: '#333333',
  },
  secondary: {
    backgroundColor: '#828282',
  }
});

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

Button.defaultProps = {
  role: 'primary'
}

export default Button;