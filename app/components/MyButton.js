import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";

const MyButton = () => (
    <Button
      title = 'codex'
    />
);

const styles = EStyleSheet.create({
  button: {
    backgroundColor: '$black'
  },
});

export default MyButton;
