import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite.js";
import { useGlobalContext } from "../../context/GlobalContext";

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async() => {
    if (form.email === '' || form.password === '' || form.username === '') {
      Alert.alert('Error','Please fill in all fields');
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      
      //set it to a global state...
      setUser(result);
      setIsLoggedIn(true);
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error',error.message);
    } finally {
      setIsSubmitting(false);
    }

  };
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className=" w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="mt-10 font-semibold text-white text-2xl">
            Sign Up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <Text className=" text-white text-normal mt-3 items-center text-center">
            Already have an account?{" "}
            <Link href="/signin" className="text-yellow-400 text-lg">
              Sign In
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
