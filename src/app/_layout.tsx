import React from "react";
import { Stack } from "expo-router";
import "../../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="home"
          options={{
            title: "TouchPay",
            headerBackVisible: false,
            headerTitleStyle: { fontSize: 18 },
            headerLeft: () => <Feather name="menu" size={28} color="black" />,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
