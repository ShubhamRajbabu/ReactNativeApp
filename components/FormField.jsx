import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  handleChangeText,
  value,
  placeholder,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-gray-100 font-medium text-base">{title}</Text>
        <View className="border-2 border-black w-full h-16 px-4 bg-gray-900 rounded-xl items-center flex-row focus:border-yellow-700">
          <TextInput
            className="flex-1 text-white font-semibold text-base"
            value={value}
            onChangeText={handleChangeText}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            secureTextEntry={title === "Password" && !showPassword}
          />
          {title === "Password" && (
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                className="w-6 h-6"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default FormField;
