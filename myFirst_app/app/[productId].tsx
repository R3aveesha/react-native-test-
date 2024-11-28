import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const SingleProduct = () => {

const params =useLocalSearchParams()
  console.log(params)

  return (
    <View>
      <Text>Single</Text>
      <Text>{params.productId}</Text>
      <Text>{params.name}</Text>
      <Text>{params.city}</Text>
    </View>
  )
}

export default SingleProduct