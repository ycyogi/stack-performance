import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import FlowStack from './FlowStack';
import type { RootStackParamList } from './types';

const Root = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Root.Navigator>
      <Root.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Root.Screen
        name="Flow"
        component={FlowStack}
        options={{ headerShown: false, presentation: 'modal' }}
      />
    </Root.Navigator>
  );
}
