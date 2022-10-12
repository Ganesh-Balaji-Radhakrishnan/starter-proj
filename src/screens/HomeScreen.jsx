import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  subText: {
    fontSize: 25,
  },
});

function HomeScreen() {
  const myName = 'gaba';
  return (
    <View>
      <Text style={styles.text}>Hi everyone</Text>
      <Text>My name is {myName}</Text>
    </View>
  );
}

export default HomeScreen;

// test
