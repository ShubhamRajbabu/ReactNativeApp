import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import {
  getAllPosts,
  getLatestPosts,
  getSearchPosts,
} from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => getSearchPosts(query));
  useEffect(() => {
    refetch();
  }, [query]);

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
          <View className="flex my-6 px-4 ">
            <Text className="text-gray-400 font-normal text-lg">
              Search Results
            </Text>
            <Text className="text-white font-semibold text-3xl">{query}</Text>
            <View className='mt-6 mb-8'>
              <SearchInput initialquery={query} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found for the given query"
            subtitle="No videos found"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
