import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
    $primaryColor: '#00BFFF',
    $black: '#000000',
    $white: '#FFFFFF'
  });

export default () => <Home />;


