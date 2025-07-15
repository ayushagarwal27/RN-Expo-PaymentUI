import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { tokensData } from "@/constants/data";

export default function BalanceScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerBackButtonDisplayMode: "minimal",
          animation: "slide_from_bottom",
          title: "Balance",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              onPress={() => router.back()}
            />
          ),
        }}
      />
      <View className="flex-1 bg-white px-10">
        <View className="bg-[#7B56FE] p-4 mt-[20px] flex-row flex-wrap mx-auto rounded-2xl">
          <View
            className="w-1/2 gap-3 border-white"
            style={{ borderRightWidth: 1 }}
          >
            <Text className="text-white text-center font-base text-xl">
              Total Sum
            </Text>
            <Text className="text-white text-center font-bold text-xl">
              408.21 USD
            </Text>
          </View>

          <View className="w-1/2 gap-3">
            <Text className="text-white text-center  font-base text-xl">
              Total Tokens
            </Text>
            <Text className="text-white text-center  font-bold text-xl">
              21
            </Text>
          </View>
        </View>

        <FlatList
          data={tokensData}
          renderItem={({ item }) => {
            return (
              <View
                className="flex-row justify-between items-center p-4 py-6 border-gray-300 rounded-3xl"
                style={{ borderWidth: StyleSheet.hairlineWidth }}
              >
                <View className="flex-row gap-3 items-center">
                  <Image
                    source={{
                      uri: item.uri,
                    }}
                    className="w-8 h-8 rounded-full"
                  />
                  <Text className="text-xl">{item.name}</Text>
                </View>
                <Text className="text-xl">{item.value}</Text>
              </View>
            );
          }}
          contentContainerClassName="gap-3 mt-16"
        />
      </View>
    </>
  );
}
