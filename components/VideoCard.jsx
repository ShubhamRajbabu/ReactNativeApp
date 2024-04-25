import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { icons } from "../constants";
import { ResizeMode, Video } from "expo-av";

const VideoCard = ({ title, creator, avatar, thumbnail, video })  => {
  const [play, setPlay] = useState(false);

  useEffect(() => { 
    setPlay(false);
  },[video,thumbnail])
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row items-start gap-3">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[45px] h-[45px] justify-center items-center rounded-lg p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-full"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-semibold text-sm"
              numberOfLines={1}
              key={title}
            >
              {title}
            </Text>
            <Text className="text-white text-xs font-normal" numberOfLines={1}>
              {creator}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {play ?
        (<Video
          source = {{ uri: video}}
          className = "w-full h-60 rounded-xl"
          resizeMode = {ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false)
            }
          }}
        />)
        :
        (<TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'>
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-10 h-10 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>)}
    </View>
  );
};

export default VideoCard;
