import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { PropsWithChildren, useRef, useState } from "react";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import LottieView from "lottie-react-native";

export default function SendScreen() {
  const [value, setValue] = useState("0.00");
  const animation = useRef<LottieView>(null);

  const handleNumberPress = (number: string) => {
    if (value === "0.00") {
      setValue(number);
    } else {
      setValue(value + number);
    }
  };

  const handleDecimalPress = () => {
    if (!value.includes(".")) {
      setValue(value + ".");
    }
  };

  const handleBackspace = () => {
    if (value.length > 1) {
      setValue(value.slice(0, -1));
    } else {
      setValue("0.00");
    }
  };

  const NumberButton = ({
    children,
    onPress,
  }: PropsWithChildren & { onPress: () => void }) => (
    <TouchableOpacity
      className="w-[33%] mt-12"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text className="text-white text-4xl text-center">{children}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-[##BEFF6B]" edges={["bottom"]}>
      <Stack.Screen
        options={{
          headerBackButtonDisplayMode: "minimal",
          animation: "slide_from_bottom",
          title: "Send",
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
        <View className="h-[60%] bg-[#7B56FE] mt-auto pt-[30px] px-4  rounded-tl-3xl rounded-tr-3xl">
          <View className="flex-row flex-wrap">
            <NumberButton onPress={() => handleNumberPress("1")}>
              1
            </NumberButton>
            <NumberButton onPress={() => handleNumberPress("2")}>
              2
            </NumberButton>
            <NumberButton onPress={() => handleNumberPress("3")}>
              3
            </NumberButton>
            <NumberButton onPress={() => handleNumberPress("4")}>
              4
            </NumberButton>
            <NumberButton onPress={() => handleNumberPress("5")}>
              5
            </NumberButton>
            <NumberButton onPress={() => handleNumberPress("6")}>
              6
            </NumberButton>
            <NumberButton onPress={() => handleNumberPress("7")}>
              7
            </NumberButton>
            <NumberButton onPress={() => handleNumberPress("8")}>
              8
            </NumberButton>
            <NumberButton onPress={() => handleNumberPress("9")}>
              9
            </NumberButton>
            <NumberButton onPress={handleDecimalPress}>.</NumberButton>
            <NumberButton onPress={() => handleNumberPress("0")}>
              0
            </NumberButton>
            <NumberButton onPress={handleBackspace}>⌫</NumberButton>
          </View>
          <Pressable
            className="bg-[##BEFF6B] mt-auto pt-5 -mx-4"
            onPress={() => {
              animation.current?.reset();
              animation.current?.play();
              setValue("0.00");
            }}
          >
            <Text className="text-center text-xl font-semibold">Confirm</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
