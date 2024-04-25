import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import {icons} from '../../constants';
import { useGlobalContext } from "../../context/GlobalContext";
import { StatusBar } from "expo-status-bar";

const TabIcon = ({icon,name,focused,color}) => {
  return (
    <View className='items-center justify-center'>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className= 'w-6 h-6'
      />
      <Text className={`${focused ? 'font-black' : 'font-normal'} text-xs`} style={{color:color}}>{name}</Text>
    </View>
  )
}
const TabLayout = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && !isLoggedIn) return <Redirect href="/signin" />;
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={
            {
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.home}
                  name="Home"
                  focused={focused}
                  color={color}
                />
              )
            }
          }
        />

        <Tabs.Screen
          name="create"
          options={
            {
              title: 'Create',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.plus}
                  name="Create"
                  focused={focused}
                  color={color}
                />
              )
            }
          }
        />
        
        <Tabs.Screen
          name="bookmark"
          options={
            {
              title: 'Bookmark',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.bookmark}
                  name="Bookmark"
                  focused={focused}
                  color={color}
                />
              )
            }
          }
        />
        <Tabs.Screen
          name="profile"
          options={
            {
              title: 'Profile',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={icons.profile}
                  name="Profile"
                  focused={focused}
                  color={color}
                />
              )
            }
          }
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;
