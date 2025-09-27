import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { tokensData } from "@/constants/data";

interface BalanceRowProps {
  item: (typeof tokensData)[0];
}

export default function BalanceRow({ item }: BalanceRowProps) {
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
}
