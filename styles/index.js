import { StyleSheet } from "react-native";
import { colorPalette } from "../constants/colors.js";

export const Styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colorPalette.welcomeBg,
    padding: 30,
  },
  onBoardingContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: colorPalette.onBoardingBg,
  },
  homeContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: colorPalette.onBoardingBg,
  },
  searchContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: colorPalette.onBoardingBg,
  },
});
