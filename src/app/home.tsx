import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <Text className="text-6xl text-center">$10:90</Text>
      <View className="h-[60%] mt-auto flex-row flex-wrap gap-6 bg-[#7B56FE] p-[45px]  rounded-tl-3xl rounded-tr-3xl">
        <TouchableOpacity className="bg-white items-center gap-2 p-10 w-[45%] rounded-2xl">
          <FontAwesome6 name="sack-dollar" size={38} color="black" />
          <Text className="text-xl">Funds</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-white items-center gap-2 p-10 w-[45%] rounded-2xl"
          onPress={() => {
            router.push("/send");
          }}
        >
          <FontAwesome name="send" size={38} color="black" />
          <Text className="text-xl">Send</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white items-center gap-2 p-10 w-[45%] rounded-2xl">
          <Ionicons name="qr-code-outline" size={38} color="black" />
          <Text className="text-xl">Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white items-center gap-2 p-10 w-[45%] rounded-2xl">
          <FontAwesome5 name="wallet" size={38} color="black" />
          <Text className="text-xl">Balance</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
