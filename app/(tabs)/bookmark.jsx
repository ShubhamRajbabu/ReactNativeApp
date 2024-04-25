import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Bookmark = () => {
  return (
    <SafeAreaView className = 'bg-black h-full mt-5'>
      <Text className='text-2xl text-white font-semibold'>Your saved videos</Text>
      <Text className='text-base font-normal text-gray-300 mt-3'>Currently work is in progress</Text>
    </SafeAreaView>
  )
}


export default Bookmark