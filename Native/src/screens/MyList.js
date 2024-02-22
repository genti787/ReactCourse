import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import HeaderHome from '../components/HeaderHome';

function MyList() {
  return (
    <View style={gStyle.container}>
      <HeaderHome show />

      <View style={gStyle.spacer12} />

      <View style={gStyle.pHHalf}>
        <Text style={gStyle.heading}>My List</Text>
      </View>
    </View>
  );
}

export default MyList;
