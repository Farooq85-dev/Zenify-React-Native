import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Styles } from "@/styles";
import { colorPalette } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";

const Listening = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Listening" });
  }, []);

  const { title, image } = useLocalSearchParams();
  return (
    <View style={Styles.meditationContainer}>
      <View>
        <View
          style={{
            backgroundColor: colorPalette.homeBannerBg,
            paddingVertical: 50,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: Array.isArray(image) ? image[0] : image }}
            style={{
              width: 300,
              height: 300,
              objectFit: "contain",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 20,
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <Image
            style={{
              width: "100%",
            }}
            source={require("../../assets/images/listening-length.jpg")}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Feather name="repeat" size={30} color="black" />
            <MaterialCommunityIcons
              name="skip-previous"
              size={30}
              color="black"
            />
            <AntDesign name="play" size={60} color="#dabbfa" />
            <Entypo name="controller-next" size={30} color="black" />
            <Feather name="repeat" size={30} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Listening;
