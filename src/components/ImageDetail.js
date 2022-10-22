import React from 'react'
import { View, Text, Image } from 'react-native'

const ImageDetail = ({ title, imageSource, score }) => (
  <View>
    <Text>{title}</Text>
    <Image source={imageSource} />
    <Text>{score}</Text>
  </View>
)

export default ImageDetail
