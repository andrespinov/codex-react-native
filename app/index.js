import React from 'react';
import { EStyleSheet } from 'react-native';
import Home from './screends/Home';

EStyleSheet.build({
    $primaryColor: "#00BFFF",
    $black: "#000000",
    $white: "#FFFFFF",
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default () => <Home />;


