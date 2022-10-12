import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ComponentScreen = () => {
  return <Text style={styles.text}>ComponentScreen</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
})

export default ComponentScreen
