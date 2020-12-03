import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CounterText from './components/CounterText';

export default function App() {
const [count, setCount] = useState(0);

function increment() {
setCount(count+1);
}

function renderEncouragingText() {
  if (count>=20) {
    return "Hang in there"
  }
  if (count>=10) {
    return "Keep Going"
  }
}

  return (
    <View style={styles.container}>

    <CounterText color="lightgrey" fontSize={20}>{count}</CounterText>
     <CounterText color="lightblue" fontSize={40}>{count}</CounterText>
     <CounterText color="blue" fontSize={60}>{count}</CounterText>
     <CounterText color="navy" fontSize={80}>{count}</CounterText>

      <TouchableOpacity onPress={increment} style={styles.button}> 
      <Text style={styles.buttonText}>Increase</Text>
      </TouchableOpacity>

      <Text style={styles.encouragingText}>{renderEncouragingText()}</Text>
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

  encouragingText: {
    marginTop: 50,
    color: "#888",
  },

  button: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },


});
