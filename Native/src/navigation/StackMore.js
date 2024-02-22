import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import MoreScreen from '../screens/More';
import MoreMyListScreen from '../screens/MoreMyList';

const Stack = createNativeStackNavigator();

function StackMore() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="MoreMyList"
        component={MoreMyListScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default StackMore;
