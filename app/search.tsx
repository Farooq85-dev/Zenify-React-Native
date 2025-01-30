import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Styles } from "@/styles";
import { colorPalette } from "@/constants/colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { moods } from "@/constants/moods";

const SearchScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Search" });
  }, []);
  return (
    <View style={Styles.searchContainer}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <View style={{ width: "100%", gap: 10 }}>
          <View style={{ position: "relative" }}>
            <TextInput
              placeholder="What are you looking for?"
              style={{
                backgroundColor: colorPalette.homeBannerBg,
                paddingLeft: 50,
                paddingVertical: 15,
                borderRadius: 50,
                fontSize: 18,
                fontWeight: "bold",
              }}
            />
            <EvilIcons
              style={{
                position: "absolute",
                top: 10,
                left: 10,
              }}
              name="search"
              size={40}
              color="black"
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Search By Mood...
            </Text>
            <FlatList
              data={moods}
              numColumns={3}
              renderItem={({ item }) => (
                <View
                  style={{
                    backgroundColor: colorPalette.homeBannerBg,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 50,
                    margin: 5,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {item.title}
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
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
            <Link href="/searchResults">
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Search
              </Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
