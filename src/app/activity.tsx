import { View, Text, FlatList, Image } from "react-native";
import React from "react";

import { router, Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { activityData } from "@/constants/data";
import { formatSolanaAddress } from "@/utils";

export default function ActivityScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerBackButtonDisplayMode: "minimal",
          animation: "slide_from_bottom",
          title: "Activity",
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
      <View className="bg-[#222222] flex-1 pt-[60px] px-5">
        <Text className="text-gray-400 text-xl font-semibold mb-4">
          18th July, 2025
        </Text>
        <FlatList
          data={activityData}
          contentContainerClassName="gap-4"
          renderItem={({ item }) => (
            <View className="bg-[#363434a0] flex-row w-full p-4 px-6 rounded-xl">
              <View>
                <Image
                  source={{ uri: item.token.uri }}
                  className="h-[50px] aspect-square mr-4 rounded-full"
                />
                <View className="bg-black rounded-full items-center justify-center p-1 absolute bottom-0 right-3">
                  {item.type === "received" && (
                    <AntDesign name="arrowdown" size={14} color="green" />
                  )}
                  {item.type !== "received" && (
                    <Feather name="arrow-up-right" size={14} color="red" />
                  )}
                </View>
              </View>
              <View>
                <Text className="text-2xl font-bold text-white">
                  {item.type === "received" ? "Received" : "Send"}
                </Text>
                <Text className="text-gray-300 text-lg">
                  {item.type === "received" ? "From: " : "To: "}
                  {formatSolanaAddress(item.address)}
                </Text>
              </View>
              {item.type === "received" ? (
                <Text className="text-green-500 text-xl ml-auto">
                  +{item.amount} {item.token.symbol}
                </Text>
              ) : (
                <Text className="text-white ml-auto text-xl">
                  -{item.amount} {item.token.symbol}
                </Text>
              )}
            </View>
          )}
        />
      </View>
    </>
  );
}
