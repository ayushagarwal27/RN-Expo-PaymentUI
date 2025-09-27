import { View, Text, FlatList } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { activityData } from "@/constants/data";
import ActivityRow from "@/components/ActivityRow";
import { createHeaderConfig } from "@/headerUtils/headerConfig";

export default function ActivityScreen() {
  return (
    <>
      <Stack.Screen
        options={createHeaderConfig({
          title: "Activity",
        })}
      />
      <View className="bg-[#222222] flex-1 pt-[60px] px-5">
        <Text className="text-gray-400 text-xl font-semibold mb-4">
          18th July, 2025
        </Text>
        <FlatList
          data={activityData}
          contentContainerClassName="gap-4"
          renderItem={({ item }) => <ActivityRow item={item} />}
        />
      </View>
    </>
  );
}
