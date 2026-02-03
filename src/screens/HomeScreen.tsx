import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { TabsParamList, RootStackParamList } from '../navigation/types';

type Props = BottomTabScreenProps<TabsParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Tap to start the 6-screen dog flow.</Text>
      <Button
        title="Start Flow"
        onPress={() =>
          (navigation.getParent() as any)?.navigate('Flow' as keyof RootStackParamList)
        }
      />
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
