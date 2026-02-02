import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FlowStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<FlowStackParamList, 'Dog3'>;

export default function Dog3Screen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dog 3</Text>
      <Text style={styles.subtitle}>End of the flow.</Text>
      <Button
        title="Done"
        onPress={() => {
          // Ensure we're at the top of the Flow stack, then close the Flow
          // (pops the root "Flow" screen, returning to Tabs/Home).
          navigation.popToTop();
          navigation.getParent()?.goBack();
        }}
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
  subtitle: { fontSize: 16, opacity: 0.7, marginBottom: 16 },
});
