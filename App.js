import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
const [count, setCount] = useState(0);

function increment() {
setCount(count+1);
}

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="Press me" onPress={increment}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
