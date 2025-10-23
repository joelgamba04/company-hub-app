import { Pressable, ScrollView, Text, View } from "react-native";
import { useAuth } from "../../src/context/AuthContext";

export default function DashboardScreen() {
  const { user, token, logout } = useAuth();

  return (
    <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>Dashboard</Text>

      <View
        style={{
          padding: 12,
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 12,
        }}
      >
        <Text style={{ fontWeight: "600", marginBottom: 6 }}>
          Logged in user
        </Text>
        <Text>
          {user ? JSON.stringify(user, null, 2) : "No user payload from API."}
        </Text>
      </View>

      <View
        style={{
          padding: 12,
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 12,
        }}
      >
        <Text style={{ fontWeight: "600", marginBottom: 6 }}>
          Session token
        </Text>
        <Text numberOfLines={3} ellipsizeMode="tail">
          {token}
        </Text>
      </View>

      <Pressable
        onPress={logout}
        style={{
          backgroundColor: "#ef4444",
          padding: 14,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Log Out</Text>
      </Pressable>
    </ScrollView>
  );
}
