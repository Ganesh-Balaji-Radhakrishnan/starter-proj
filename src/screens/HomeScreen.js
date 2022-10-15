/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
})

const HomeScreen = (props) => (
  <View>
    <Text style={styles.text}>Hi everyone</Text>
    <Button
      onPress={() => props.navigation.navigate('Components')}
      title="go to components screen"
    />
    <Button onPress={() => props.navigation.navigate('List')} title="go to list screen" />
  </View>
)

export default HomeScreen

// test
// test 2
