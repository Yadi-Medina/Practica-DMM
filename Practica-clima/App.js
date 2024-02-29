import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Clima from './components/Clima';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        {}
      </View>
      <View style={styles.contenido}>
        <Clima />
      </View>
      <View style={styles.pie}>
        {}
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2caea',
  },
  contenido: {
    flex: 1,
    padding: 20,
  },
});