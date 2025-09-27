import { View, Text } from "react-native";
import React from "react";

export default function BalanceHeader() {
  return (
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
        <Text className="text-white text-center  font-bold text-xl">21</Text>
      </View>
    </View>
  );
}
