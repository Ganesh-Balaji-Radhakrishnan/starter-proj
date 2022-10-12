import React from 'react';
import { Text, StyleSheet } from 'react-native';

/* function ComponentScreen() {
  // eslint-disable-next-line react/jsx-filename-extension, no-use-before-define
  return <Text style={styles.text}>ComponentScreen</Text>;
} */

function ComponentScreen() {
  return <Text style={styles.text}>ComponentScreen</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default ComponentScreen;
