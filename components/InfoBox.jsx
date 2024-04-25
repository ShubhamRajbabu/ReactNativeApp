import { View, Text } from 'react-native'
import React from 'react'

const InfoBox = ({title,subtitle,containerStyles,titleStyles}) => {
  return (
    <View className={containerStyles}>
          <Text className={`text-white text-center font-semibold ${titleStyles}`}>{title}</Text>
          <Text className={`text-sm text-gray-300 text-center ${titleStyles}`}>{subtitle}</Text>
    </View>
  )
}

export default InfoBox