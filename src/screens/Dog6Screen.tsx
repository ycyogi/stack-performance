import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FlowStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<FlowStackParamList, 'Dog6'>;

export default function Dog6Screen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dog 6</Text>
      <View style={styles.card}>
        <FastImage
          source={require('../../assets/dog6.jpg')}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <Button
        title="Done"
        onPress={async () => {
          // Optional: clear image caches to reduce memory/disk pressure between flows.
          // Note: when using local bundled images (require(...)), cache clearing may not have
          // a dramatic effect, but it helps for remote images.
          try {
            await FastImage.clearMemoryCache();
            await FastImage.clearDiskCache();
          } catch {
            // ignore
          }

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
