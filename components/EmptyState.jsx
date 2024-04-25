import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-2">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-white font-semibold text-3xl">{subtitle}</Text>
          <Text className="text-gray-200 font-medium text-xl">{title}</Text>
          <CustomButton
          title='Create Video'
          handlePress={() => router.push('/create')}
          containerStyles='my-5 w-full'
          />
    </View>
  );
};

export default EmptyState;
