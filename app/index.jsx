// File: app/index.jsx
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

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
    </View>
  );
}
