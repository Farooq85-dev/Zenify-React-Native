import { View, Text, TouchableOpacity, Image } from "react-native";
import { Styles } from "../styles/index.js";
import { colorPalette } from "@/constants/colors.js";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Welcome" });
  }, []);

  return (
    <View style={Styles.welcomeContainer}>
      <View style={{ paddingTop: 40 }}>
        <Image
          style={{ width: 300, height: 300 }}
          alt="Loading..."
          source={{
            uri: "https://assets.api.uizard.io/api/cdn/stream/d98451a2-a9df-4d8e-8e76-043998d7ab63.png",
          }}
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
            color: "#fff",
          }}
        >
          Zenify
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
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
            gap: 8,
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: 50,
            backgroundColor: colorPalette.welcomeBtnBg,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          <Link href={"/onBoarding"}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              Start
            </Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
