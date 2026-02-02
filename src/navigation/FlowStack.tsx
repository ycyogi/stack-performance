import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dog1Screen from '../screens/Dog1Screen';
import Dog2Screen from '../screens/Dog2Screen';
import Dog3Screen from '../screens/Dog3Screen';
import type { FlowStackParamList } from './types';

const Stack = createNativeStackNavigator<FlowStackParamList>();

export default function FlowStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dog1"
        component={Dog1Screen}
        options={{ title: 'Dog 1' }}
      />
      <Stack.Screen
        name="Dog2"
        component={Dog2Screen}
        options={{ title: 'Dog 2' }}
      />
      <Stack.Screen
        name="Dog3"
        component={Dog3Screen}
        options={{ title: 'Dog 3' }}
      />
    </Stack.Navigator>
  );
}
