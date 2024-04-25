import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalContext";

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  console.log(isLoggedIn);
  return (
    <SafeAreaView className="bg-slate-900 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="h-[90vh] w-full justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[360px] w-full h-[280px]"
            resizeMode="contain"
          />

          <View className="relative mt-7">
            <Text className="text-white font-bold text-3xl text-center">
              Discover the Enhanced possibilities with{" "}
              <Text className="font-bold text-yellow-500">AORA</Text>
            </Text>
          </View>
          <Text className="text-sm font-normal text-gray-100 text-center mt-4">
            Where creativity meets innovation: embark on a journey of limitless
            exploration of AORA
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/signin")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
