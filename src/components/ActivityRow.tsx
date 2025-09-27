import { View, Text, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { formatSolanaAddress } from "@/utils";
import { activityData } from "@/constants/data";

interface ActivityRowProps {
  item: (typeof activityData)[0];
}

export default function ActivityRow({ item }: ActivityRowProps) {
  return (
    <View className="bg-[#363434a0] flex-row w-full p-4 px-6 rounded-xl">
      {/* COIN LOGO */}
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

      {/* COIN INFO */}
      <View>
        <Text className="text-2xl font-bold text-white">
          {item.type === "received" ? "Received" : "Send"}
        </Text>
        <Text className="text-gray-300 text-lg">
          {item.type === "received" ? "From: " : "To: "}
          {formatSolanaAddress(item.address)}
        </Text>
      </View>

      {/* COIN VALUE */}
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
  );
}
