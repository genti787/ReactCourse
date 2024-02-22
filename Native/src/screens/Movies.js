import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import HeaderHome from '../components/HeaderHome';

function Movies() {
  return (
    <View style={gStyle.container}>
      <HeaderHome show />

      <View style={gStyle.spacer12} />

      <View style={gStyle.pHHalf}>
        <Text style={gStyle.heading}>Movies</Text>
      </View>
    </View>
  );
}

export default Movies;
