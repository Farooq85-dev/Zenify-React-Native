import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { goals } from "../constants/goals.js";
import { colorPalette } from "@/constants/colors.js";
import { Styles } from "@/styles/index.js";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather.js";

const OnBoarding = () => {
  const Item = ({ title, image }: { title: string; image: string }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={styles.itemText}>{title}</Text>
    </View>
  );

  return (
    <View style={Styles.onBoardingContainer}>
      <View style={styles.textSection}>
        <Text style={styles.title}>Why do you want to meditate?</Text>
        <Text style={styles.subtitle}>Choose one or multiple goals.</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <Item title={item.title} image={item.image} />
          )}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            paddingVertical: 7,
            borderRadius: 50,
            backgroundColor: colorPalette.welcomeBtnBg,
          }}
        >
          <Link href={"/home"}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 20,
                fontFamily: "FunnelDisplay-Regular",
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

const styles = StyleSheet.create({
  textSection: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "FunnelDisplay-Bold",
    fontWeight: "bold",
    fontSize: 30,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  flatListContainer: {
    marginTop: 15,
    flex: 1,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  itemContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: colorPalette.goalsBg,
    borderRadius: 60,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    objectFit: "cover",
  },
  itemText: {
    fontWeight: "bold",
    fontFamily: "FunnelDisplay-Bold",
  },
  footerText: {
    color: "red",
    textAlign: "center",
  },
});

export default OnBoarding;
