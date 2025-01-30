import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { View, Text, Image } from "react-native";

const UserStatistics = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerTitle: "User Profile" });
  }, []);

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
      </View>
    </View>
  );
};

export default UserStatistics;
