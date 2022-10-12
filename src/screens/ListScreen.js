import React from 'react'
import { Text, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'friend1' },
    { name: 'friend2' },
    { name: 'friend3' },
    { name: 'friend4' },
    { name: 'friend5' },
  ]
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  )
}

export default ListScreen
