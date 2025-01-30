import { colorPalette } from "@/constants/colors";
import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const UserStatisticsScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "User Profile" });
  }, []);

  // Going to first Screen and resetting the stack...
  const gotoHomeHandler = () => {
    router.dismissAll();
  };

  return (
    <View style={{ flex: 1, padding: 20, width: "100%" }}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Your Statistics
          </Text>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwzOHx8YXZhdGFyfGVufDF8fHx8MTY1ODM1OTY0Nw&ixlib=rb-1.2.1&q=80&w=1080",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#dde5f0",
              padding: 20,
              borderRadius: 10,
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>109</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Meditations
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#e7ddf0",
              padding: 20,
              borderRadius: 10,
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>3402</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Minutes listened
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ddf0e7",
              padding: 20,
              borderRadius: 10,
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>9420</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Points</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f0dddd",
              padding: 20,
              borderRadius: 10,
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>14</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Courses saved
            </Text>
          </View>
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
            onPress={gotoHomeHandler}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              Goto Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserStatisticsScreen;
