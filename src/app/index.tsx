import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import CreditCard from "@/svg/CreditCard";

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#7B56FE]">
      <View className="mt-[80px] mx-auto gap-3 items-center">
        <Text className="text-white text-5xl font-bold">TouchPay</Text>
        <Text className="text-white text-2xl">Receive payments easily</Text>
      </View>
      <View className="mx-auto">
        <CreditCard />
      </View>

      <View className="bg-black p-6 mt-auto mb-[60px] w-[70px] mx-auto rounded-full items-center justify-center">
        <AntDesign
          name="arrowright"
          size={24}
          color="white"
          onPress={() => {
            router.push("/home");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
