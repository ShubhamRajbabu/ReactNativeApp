import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native-animatable";

const Bookmark = () => {
  return (
    <SafeAreaView className="bg-black h-full mt-5 justify-center items-center">
      <Text className="text-3xl text-white font-semibold">
        Your saved videos
      </Text>
      <Image
        source={{uri: "https://i.ytimg.com/vi/DODLEX4zzLQ/hqdefault.jpg"}}
        resizeMode="contain"
        className="w-80 h-1/2"
      />
      <Text className="text-xl font-normal text-gray-300 mt-5">
        Currently work is in progress
      </Text>
    </SafeAreaView>
  );
};

export default Bookmark;
