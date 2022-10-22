import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)
  return (
    <View>
      <Button title="increase" onPress={() => setCounter(counter + 1)} />
      <Button title="decrease" onPress={() => setCounter(counter - 1)} />
      <Text>Counter value : {counter}</Text>
    </View>
  )
}

export default CounterScreen
