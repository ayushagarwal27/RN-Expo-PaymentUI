import { View, FlatList } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { tokensData } from "@/constants/data";
import BalanceRow from "@/components/BalanceRow";
import BalanceHeader from "@/components/BalanceHeader";
import { createHeaderConfig, headerStyles } from "@/headerUtils/headerConfig";

export default function BalanceScreen() {
  return (
    <>
      <Stack.Screen
        options={createHeaderConfig({
          title: "Balance",
          ...headerStyles.light,
        })}
      />
      <View className="flex-1 bg-white px-10">
        <BalanceHeader />
        <FlatList
          data={tokensData}
          renderItem={({ item }) => {
            return <BalanceRow item={item} />;
          }}
          contentContainerClassName="gap-3 mt-16"
        />
      </View>
    </>
  );
}
