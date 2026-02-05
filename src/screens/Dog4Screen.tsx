import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FastImage from 'react-native-fast-image';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FlowStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<FlowStackParamList, 'Dog4'>;

export default function Dog4Screen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dog 4</Text>
      <View style={styles.card}>
        <FastImage
          source={require('../../assets/dog4.jpg')}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <Button title="Next" onPress={() => navigation.navigate('Dog5')} />
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
