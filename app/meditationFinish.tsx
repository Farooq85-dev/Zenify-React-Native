import { colorPalette } from "@/constants/colors";
import { Styles } from "@/styles";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const meditationFinish = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Meditation Finished" });
  }, []);

  return (
    <View style={Styles.welcomeContainer}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
            }}
          >
            You've just finished meditation!
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://assets.api.uizard.io/api/cdn/stream/0e605f02-22f7-486c-8624-7de19b2fa8ae.png",
            }}
            style={{
              width: 300,
              height: 300,
              objectFit: "contain",
            }}
          />
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
            <Link href={"/userStatistics"}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  fontFamily: "FunnelDisplay-bold",
                }}
              >
                See My Statistics
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default meditationFinish;
