import { View, Text, TouchableOpacity, Image } from "react-native";
import { Styles } from "../styles/index.js";
import { colorPalette } from "@/constants/index.js";
import Feather from "@expo/vector-icons/Feather";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Welcome" });
  }, []);

  return (
    <View style={Styles.container}>
      <View style={{ paddingTop: 40 }}>
        <Image
          style={{ width: 300, height: 300 }}
          alt="Loading..."
          source={require("../assets/images/welcome-img.png")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text
          style={{
            fontSize: 60,
            fontWeight: "bold",
            fontFamily: "FunnelDisplay-ExtraBold",
            color: "#fff",
          }}
        >
          Zenify
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
          }}
        >
          Rest Your mind
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            paddingHorizontal: 14,
            paddingVertical: 7,
            borderRadius: 50,
            backgroundColor: colorPalette.welcomeBtnBg,
          }}
        >
          <Link href={"/onBoarding"}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 20,
                fontFamily: "FunnelDisplay-Regular",
              }}
            >
              Start
            </Text>
            <Feather name="arrow-right" size={25} />
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
