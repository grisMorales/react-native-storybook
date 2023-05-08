import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import {YELLOW, BLUE_1,GRAY_1,ORANGE, WHITE } from './../../../src/styles/tokens/tokens'

const Button = (props) => {
  const {
    title,
    onPress,
    role
  } = props;

  const buttonStyle = StyleSheet.flatten([styles.button, styles[role]]);
  var [ isPress, setIsPress ] = React.useState(false);

  
  var touchProps = {
    activeOpacity: 1,
    underlayColor: GRAY_1,                             
    style: styles[role], 
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),
  };

  return (
    <TouchableHighlight {...touchProps} onPress={onPress}>
       <Text style={styles.text}>{title}</Text>
     </TouchableHighlight>
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
    backgroundColor: YELLOW,
  },
  secondary: {
    backgroundColor: ORANGE,
  },
  pressed:{
    backgroundColor: BLUE_1
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