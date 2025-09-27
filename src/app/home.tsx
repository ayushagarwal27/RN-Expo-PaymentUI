import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import HandPay from "@/svg/HandPay";
import { navigationButtons } from "@/constants/data";
import { navigationType } from "@/types";

export default function HomeScreen() {
  function getActionIcon(type: navigationType) {
    let actionIcon: React.ReactElement | null = null;
    switch (type) {
      case "send": {
        actionIcon = <FontAwesome name="send" size={36} color="black" />;
        break;
      }
      case "balance": {
        actionIcon = <FontAwesome5 name="wallet" size={38} color="black" />;
        break;
      }
      case "activity": {
        actionIcon = <Feather name="activity" size={38} color="black" />;
        break;
      }
      case "receive": {
        actionIcon = (
          <Ionicons name="qr-code-outline" size={38} color="black" />
        );
      }
    }
    return actionIcon;
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <View className="-mt-16">
        <HandPay />
      </View>
      <Text className="text-6xl mt-6 text-center">$10:90</Text>
      <View className="h-[60%] mt-auto flex-row flex-wrap gap-6 bg-[#7B56FE] p-[45px]  rounded-tl-3xl rounded-tr-3xl">
        {navigationButtons.map((action) => {
          return (
            <TouchableOpacity
              className="bg-white items-center gap-2 p-10 w-[45%] rounded-2xl"
              key={action.label}
              onPress={() => {
                router.push(
                  action.path as typeof action.path &
                    Parameters<typeof router.push>[0]
                );
              }}
            >
              {getActionIcon(action.label.toLowerCase() as navigationType)}
              <Text className="text-xl">{action.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
