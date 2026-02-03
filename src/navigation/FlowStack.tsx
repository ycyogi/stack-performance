import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dog1Screen from '../screens/Dog1Screen';
import Dog2Screen from '../screens/Dog2Screen';
import Dog3Screen from '../screens/Dog3Screen';
import Dog4Screen from '../screens/Dog4Screen';
import Dog5Screen from '../screens/Dog5Screen';
import Dog6Screen from '../screens/Dog6Screen';
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
      <Stack.Screen
        name="Dog4"
        component={Dog4Screen}
        options={{ title: 'Dog 4' }}
      />
      <Stack.Screen
        name="Dog5"
        component={Dog5Screen}
        options={{ title: 'Dog 5' }}
      />
      <Stack.Screen
        name="Dog6"
        component={Dog6Screen}
        options={{ title: 'Dog 6' }}
      />
    </Stack.Navigator>
  );
}
