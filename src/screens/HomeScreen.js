import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
})

const HomeScreen = ({ navigation }) => (
  <View>
    <Text style={styles.text}>Hi everyone</Text>
    <Button onPress={() => navigation.navigate('Components')} title="go to components screen" />
    <Button onPress={() => navigation.navigate('List')} title="go to list screen" />
    <Button onPress={() => navigation.navigate('ImgScreen')} title="go to Image screen" />
  </View>
)

export default HomeScreen

// test
// test 3
