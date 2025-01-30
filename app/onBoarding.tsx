import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { goals } from "../constants/goals.js";
import { colorPalette } from "@/constants/colors.js";
import { Styles } from "@/styles/index.js";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "On Boarding" });
  }, []);

  const Item = ({ title, image }: { title: string; image: string }) => (
    <View
      style={{
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: colorPalette.goalsBg,
          borderRadius: 60,
          padding: 10,
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            objectFit: "cover",
          }}
          source={{ uri: image }}
        />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </View>
  );

  return (
    <View style={Styles.onBoardingContainer}>
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Why do you want to meditate?
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "black",
          }}
        >
          Choose one or multiple goals.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <Item title={item.title} image={item.image} />
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          keyExtractor={(item) => item.id}
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
          <Link href={"/home"}>
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

export default OnBoardingScreen;
