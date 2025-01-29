import { StyleSheet } from "react-native";
import { colorPalette } from "../constants/index.js";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: colorPalette.welcomeBg,
    padding: 30,
  },
});
