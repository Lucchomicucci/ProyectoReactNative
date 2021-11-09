import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Receta from './src/components/receta/receta';

export default function App() {
  return (
    <View style={styles.container}>
    <View>
      <StatusBar style="auto" />
      <Receta />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
