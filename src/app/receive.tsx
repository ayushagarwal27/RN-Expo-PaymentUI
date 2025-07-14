import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ReceiveScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerBackButtonDisplayMode: "minimal",
          animation: "slide_from_bottom",
          title: "Receive",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="white"
              onPress={() => router.back()}
            />
          ),
          headerStyle: { backgroundColor: "#222222" },
          headerTintColor: "white",
        }}
      />
      <View className="bg-[#222222] flex-1 pt-[100px] px-10 gap-10 items-center">
        <Ionicons name="qr-code-outline" size={300} color="white" />
        <Text className="text-white text-2xl text-center">
          5Z5vG9qU6vQJp6k2mE9YxH4Nw8fY8cM8YVvW1yLkPdPq
        </Text>

        <Text className="bg-[#BEFF6B40] text-[#BEFF6B] font-semibold py-6 px-10 rounded-2xl">
          Copy Address
        </Text>
      </View>
    </>
  );
}
