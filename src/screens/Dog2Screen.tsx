import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FlowStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<FlowStackParamList, 'Dog2'>;

export default function Dog2Screen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dog 2</Text>
      <Text style={styles.subtitle}>Placeholder screen 2.</Text>
      <Button title="Next" onPress={() => navigation.navigate('Dog3')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 16, opacity: 0.7, marginBottom: 16 },
});
