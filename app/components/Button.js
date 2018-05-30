import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-native';

const Button = (PropTypes) => (
    <Button
        title = {PropTypes.title}
        styles = {styles.button}
    />
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;