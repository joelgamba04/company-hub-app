import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import { useAuth } from "../../src/context/AuthContext";

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async () => {
    if (!email || !password) {
      Alert.alert("Missing fields", "Please enter email and password.");
      return;
    }
    setSubmitting(true);
    try {
      await login(email.trim(), password);
      router.replace("/(app)/dashboard");
    } catch (e) {
      Alert.alert("Login failed", e.message || "Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: "center", gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 8 }}>
        Welcome
      </Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 12,
          padding: 12,
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 12,
          padding: 12,
        }}
      />

      <Pressable
        onPress={onSubmit}
        disabled={submitting}
        style={{
          backgroundColor: submitting ? "#999" : "#0ea5e9",
          padding: 14,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        {submitting ? (
          <ActivityIndicator />
        ) : (
          <Text style={{ color: "white", fontWeight: "600" }}>Log In</Text>
        )}
      </Pressable>
    </View>
  );
}
