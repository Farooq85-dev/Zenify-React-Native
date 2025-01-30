import { Styles } from "@/styles";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colorPalette } from "@/constants/colors";
import { moods } from "../constants/moods.js";

const home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Home" });
  }, []);
  return (
    <View style={Styles.homeContainer}>
      <View
        style={{
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "FunnelDisplay-Bold",
                fontSize: 30,
              }}
            >
              Good morning!
            </Text>
            <FontAwesome name="search" size={30} color="black" />
          </View>
          <View>
            <Text
              style={{
                fontWeight: "black",
                fontFamily: "FunnelDisplay-Bold",
                fontSize: 18,
              }}
            >
              Let's start the day with a meditation
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: colorPalette.homeBannerBg,
              borderRadius: 10,
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "FunnelDisplay-ExtraBold",
                  lineHeight: 28,
                }}
              >
                {"Become as \ncalm as a cat"}
              </Text>
              <View
                style={{
                  backgroundColor: colorPalette.onBoardingBg,
                  width: 70,
                  paddingVertical: 4,
                  alignItems: "center",
                  borderRadius: 4,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>21min</Text>
              </View>
            </View>
            <Image
              src="https://assets.api.uizard.io/api/cdn/stream/3354342c-3f99-4f08-85a0-a8be68e9d1fc.png"
              style={{
                width: 160,
                height: 160,
                objectFit: "contain",
              }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Choose by your mood
          </Text>
          <View>
            <FlatList
              data={moods}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 5,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: item.color,
                      borderRadius: 10,
                      width: "100%",
                      paddingHorizontal: 20,
                      paddingVertical: 15,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: 100, height: 100 }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              )}
              numColumns={2}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default home;
