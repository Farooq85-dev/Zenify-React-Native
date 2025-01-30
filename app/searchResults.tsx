import { colorPalette } from "@/constants/colors";
import { Styles } from "@/styles";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { View, Text, Image } from "react-native";

const SearchResults = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: '"Calm"' });
  }, []);
  return (
    <View style={Styles.searchContainer}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          marginBottom: 10,
        }}
      >
        2 search results...
      </Text>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Recommended
        </Text>
        <View>
          <View
            style={{
              backgroundColor: "#dde5f0",
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
                {"Calm body,\ncalm mind"}
              </Text>
              <View
                style={{
                  backgroundColor: colorPalette.onBoardingBg,
                  width: 70,
                  paddingVertical: 4,
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>15min</Text>
              </View>
            </View>
            <Image
              src="https://assets.api.uizard.io/api/cdn/stream/b6eed7c8-ad8d-4dd3-9c24-9290ab89fb98.png"
              style={{
                width: 160,
                height: 160,
                objectFit: "contain",
              }}
            />
          </View>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Most Popular
        </Text>
        <View>
          <View
            style={{
              backgroundColor: "#f1ede9",
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
                {"Become as\ncalm as a cat"}
              </Text>
              <View
                style={{
                  backgroundColor: colorPalette.onBoardingBg,
                  width: 70,
                  paddingVertical: 4,
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>23min</Text>
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
      </View>
    </View>
  );
};

export default SearchResults;
