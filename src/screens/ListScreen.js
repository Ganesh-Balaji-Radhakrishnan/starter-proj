import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'friend1', age: 20 },
    { name: 'friend2', age: 20 },
    { name: 'friend3', age: 20 },
    { name: 'friend4', age: 20 },
    { name: 'friend5', age: 20 },
  ]
  return (
    <FlatList
      data={friends}
      horizontal={false}
      horizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => (
        <Text style={Styles.textItem}>
          {item.name} with the age of {item.age}
        </Text>
      )}
    />
  )
}

const Styles = StyleSheet.create({
  textItem: {
    marginVertical: 40,
    textAlign: 'center',
  },
})

export default ListScreen
