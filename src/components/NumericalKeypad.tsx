import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { PropsWithChildren } from "react";

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

interface NumericalKeypadInterface {
  value: string;
  setValue: (num: string) => void;
  handleOnConfirmPress: () => void;
}

export default function NumericalKeypad({
  value,
  setValue,
  handleOnConfirmPress,
}: NumericalKeypadInterface) {
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
  return (
    <View className="h-[60%] bg-[#7B56FE] mt-auto pt-[30px] px-4  rounded-tl-3xl rounded-tr-3xl">
      <View className="flex-row flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <NumberButton
            key={number}
            onPress={() => handleNumberPress(number.toString())}
          >
            {number}
          </NumberButton>
        ))}
        <NumberButton onPress={handleDecimalPress}>.</NumberButton>
        <NumberButton onPress={() => handleNumberPress("0")}>0</NumberButton>
        <NumberButton onPress={handleBackspace}>⌫</NumberButton>
      </View>
      <Pressable
        className="bg-[##BEFF6B] mt-auto pt-5 -mx-4"
        onPress={handleOnConfirmPress}
      >
        <Text className="text-center text-xl font-semibold">Confirm</Text>
      </Pressable>
    </View>
  );
}
