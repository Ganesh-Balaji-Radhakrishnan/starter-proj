import React, { useState } from 'react'
import { View, Button, FlatList } from 'react-native'

const ColorScreen = () => {
  const [bgColor, setBgColor] = useState([])

  const createColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
  }

  return (
    <View>
      <Button
        title="press here for color change"
        onPress={() => setBgColor([...bgColor, createColor()])}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={bgColor}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  )
}

export default ColorScreen

/* return (
        <View>
          <Button
            title="Add a Color"
            onPress={() => {
              setColors([...colors, randomRgb()]);
            }}
          />
    
          <FlatList
            keyExtractor={item => item}
            data={colors}
            renderItem={({ item }) => {
              return (
                <View style={{ height: 100, width: 100, backgroundColor: item }} />
              );
            }}
          />
        </View>
      ); */
