import { colorPalette } from "@/constants/colors";
import { Styles } from "@/styles";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

const MeditationPreviewScreen = () => {
  const { title, description, image, time, downloads } = useLocalSearchParams();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Meditaion Preview" });
  }, []);

  return (
    <View style={Styles.meditationContainer}>
      <View
        style={{
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: colorPalette.homeBannerBg,
              padding: 20,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: Array.isArray(image) ? image[0] : image }}
              style={{
                width: 200,
                height: 200,
                objectFit: "contain",
              }}
            />
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 20,
              padding: 20,
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 25 }}>{title}</Text>
              <Text
                style={{
                  fontWeight: "black",
                  fontSize: 18,
                  textAlign: "justify",
                }}
              >
                {description}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Entypo name="stopwatch" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {time} minutes
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Feather name="download" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {downloads} users saved this
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: "100%", padding: 20 }}>
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
            <Link
              href={{
                pathname: "/listening/[id]",
                params: { title: title, image: image },
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Start listening
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MeditationPreviewScreen;
