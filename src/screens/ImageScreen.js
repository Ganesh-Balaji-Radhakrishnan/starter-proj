import React from 'react'
import { View } from 'react-native'

import ImageDetail from '../components/ImageDetail'
/* eslint-disable global-require */

const ImageScreen = () => (
  <View>
    <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score="1" />
    <ImageDetail title="Mountian" imageSource={require('../../assets/mountain.jpg')} score="2" />
    <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score="3" />
  </View>
)

/* eslint-enable global-require */
export default ImageScreen
