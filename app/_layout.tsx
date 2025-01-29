import { colorPalette } from "@/constants/colors.js";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: "FunnelDisplay-Bold",
        },
        headerStyle: {
          backgroundColor: colorPalette.welcomeBtnBg,
        },
        statusBarHidden: true,
      }}
    />
  );
}
