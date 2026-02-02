import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Tabs'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Tap to start the 3-screen flow.</Text>
      <Button title="Start Flow" onPress={() => navigation.navigate('Flow')} />
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
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 16,
    textAlign: 'center',
  },
});
