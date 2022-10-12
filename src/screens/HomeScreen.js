import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  const myName = gaba;
  return (
    <View>
      <Text style={styles.text}>Hi everyone</Text>
      <Text>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  subText: {
    fontSize: 25,
  },
});

export default HomeScreen;

//test
