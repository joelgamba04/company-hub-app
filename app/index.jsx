// File: app/index.jsx
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Company Hub</Text>
      <Button
        title="Calculator"
        onPress={() => router.push("/services/calculator")}
      />
      <Button
        title="Notes App"
        onPress={() => router.push("/services/notes")}
      />
      <Button
        title="Login Screen"
        onPress={() => router.push("/pages/LoginScreen")}
      />
    </View>
  );
}
