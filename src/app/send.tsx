import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { PropsWithChildren, useRef, useState } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import NumericalKeypad from "@/components/NumericalKeypad";
import { createHeaderConfig, headerStyles } from "@/utils/headerConfig";

export default function SendScreen() {
  const [value, setValue] = useState("0.00");
  const animation = useRef<LottieView>(null);

  function handleOnConfirmPress() {
    animation.current?.reset();
    animation.current?.play();
    setValue("0.00");
  }

  return (
    <SafeAreaView className="flex-1 bg-[##BEFF6B]" edges={["bottom"]}>
      <Stack.Screen
        options={createHeaderConfig({
          title: "Send",
          ...headerStyles.light,
        })}
      />
      <View className="flex-1 bg-white">
        <LottieView
          source={require("../../assets/lotte/party.json")}
          loop={false}
          autoPlay={false}
          ref={animation}
          style={{ position: "absolute", inset: 0 }}
        />
        <View className="gap-6 items-center mt-[40px]">
          <Text className="text-lg">Amount</Text>
          <Text className="text-6xl">{value} USD</Text>
        </View>
        <NumericalKeypad
          value={value}
          setValue={setValue}
          handleOnConfirmPress={handleOnConfirmPress}
        />
      </View>
    </SafeAreaView>
  );
}
