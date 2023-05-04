import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, WHITE, GRAY_1 } from '../../../design-tokens/tokens';

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
    color: WHITE,
    fontSize: 20
  },
  primary: {
    backgroundColor: BLACK,
  },
  secondary: {
    backgroundColor: GRAY_1,
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