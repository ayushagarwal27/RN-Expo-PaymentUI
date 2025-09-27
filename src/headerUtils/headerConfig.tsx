import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export interface HeaderConfigOptions {
  title: string;
  backgroundColor?: string;
  tintColor?: string;
  arrowColor?: string;
  animation?: "slide_from_bottom" | "slide_from_right" | "fade" | "none";
}

export function createHeaderConfig(options: HeaderConfigOptions) {
  const {
    title,
    backgroundColor = "#222222",
    tintColor = "white",
    arrowColor = "white",
    animation = "slide_from_bottom",
  } = options;

  return {
    headerBackButtonDisplayMode: "minimal" as const,
    animation,
    title,
    headerLeft: () => (
      <AntDesign
        name="arrowleft"
        size={24}
        color={arrowColor}
        onPress={() => router.back()}
      />
    ),
    headerStyle: { backgroundColor },
    headerTintColor: tintColor,
  };
}

// Predefined common header styles
export const headerStyles = {
  dark: {
    backgroundColor: "#222222",
    tintColor: "white",
    arrowColor: "white",
  },
  light: {
    backgroundColor: "white",
    tintColor: "black",
    arrowColor: "black",
  },
  green: {
    backgroundColor: "#BEFF6B",
    tintColor: "black",
    arrowColor: "black",
  },
} as const;
