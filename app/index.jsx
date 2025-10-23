// app/index.jsx
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../src/context/AuthContext";

export default function Index() {
  const { token, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  // If logged in, go to dashboard. Otherwise, go to login.
  return <Redirect href={token ? "/(app)/dashboard" : "/(auth)/login"} />;
}
