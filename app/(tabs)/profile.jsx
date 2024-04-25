import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { getUserPosts, signOut } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { router, useLocalSearchParams } from "expo-router";
import { useGlobalContext } from "../../context/GlobalContext";
import { icons } from "../../constants";
import { Image } from "react-native-animatable";
import InfoBox from "../../components/InfoBox";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async() => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);
    router.replace('/signin')
  };

  const onRefresh = async () => {
    setRefreshing(true);
    //re-call videos-> if any new videos appeared
    await refetch();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mb-12 mt-6 px-4">
            <TouchableOpacity
              className="w-full items-end mr-3 mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6 justify-end"
              />
            </TouchableOpacity>
            <View className="w-16 h-16 border border-yellow-600 justify-center items-center ">
              <Image
                source={{ uri: user?.avatar }}
                resizeMode="cover"
                className="w-[90%] h-[90%] rounded-lg"
              />
            </View>
            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />
            <View className='mt-3 flex-row'>
              <InfoBox
                title={posts.length || 0}
                subtitle='Posts'
                containerStyles="mr-8"
                titleStyles="text-xl"
              />
              <InfoBox
                title='1.2k'
                subtitle='Followers'
                titleStyles="text-xl"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
