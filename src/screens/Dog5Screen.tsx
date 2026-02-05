import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Image } from 'expo-image';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FlowStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<FlowStackParamList, 'Dog5'>;

export default function Dog5Screen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dog 5</Text>
      <View style={styles.card}>
        <Image
          source={require('../../assets/dog5.jpg')}
          style={styles.image}
          contentFit="cover"
        />
      </View>
      <Button title="Next" onPress={() => navigation.navigate('Dog6')} />
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
  title: { fontSize: 28, fontWeight: '700', marginBottom: 16 },
  card: {
    width: 260,
    height: 260,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  image: { width: '100%', height: '100%' },
});
