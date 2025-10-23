import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// NOTE: In a real RN/Expo app, you would import icons here, e.g.:
// import { Mail, Lock, LogIn } from '@expo/vector-icons';
// For this simulation, we'll use placeholder comments for the icons.

const LoginScreen = ({ onLoginSuccess }) => {
  // 1. Internal State Management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 2. Define internal validation/mock credentials
  const VALID_EMAIL = "user@example.com";
  const VALID_PASSWORD = "password123";

  // 3. Define the internal login function
  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      // --- Simulate Network Call (e.g., Firebase signInWithEmailAndPassword) ---
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        // Call the parent callback on success
        onLoginSuccess();
      } else {
        throw new Error(
          "Invalid email or password. Please check the tip below."
        );
      }
    } catch (error) {
      console.error("Login attempt failed:", error.message);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* <LogIn size={48} color="#2563EB" /> */}
        <Text style={styles.iconPlaceholder}>[Icon: LogIn]</Text>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Sign in to access your hosted content.
        </Text>
        {errorMessage ? (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        ) : null}
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            {/* <Mail size={20} color="#9CA3AF" /> */}
            <Text style={styles.inputIconPlaceholder}>[Icon: Mail]</Text>
            <TextInput
              style={styles.input}
              placeholder="user@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!isLoading}
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            {/* <Lock size={20} color="#9CA3AF" /> */}
            <Text style={styles.inputIconPlaceholder}>[Icon: Lock]</Text>
            <TextInput
              style={styles.input}
              placeholder="password123"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              editable={!isLoading}
            />
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          style={[
            styles.button,
            isLoading ? styles.buttonDisabled : styles.buttonEnabled,
          ]}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <ActivityIndicator color="#FFFFFF" />
              <Text style={styles.buttonText}>Logging In...</Text>
            </>
          ) : (
            <Text style={styles.buttonText}>Sign In</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipText}>
          Tip: Use {VALID_EMAIL} and {VALID_PASSWORD}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Equivalent to h-full
    padding: 24, // Equivalent to p-6
    justifyContent: "center",
    backgroundColor: "#FFFFFF", // Assuming the component fills a white screen
  },
  header: {
    alignItems: "center",
    marginBottom: 40, // space-y-2 plus space-y-8 margin
  },
  iconPlaceholder: {
    fontSize: 16,
    color: "#2563EB",
    marginBottom: 8,
  },
  title: {
    fontSize: 30, // 3xl
    fontWeight: "700", // font-bold
    color: "#1F2937", // gray-800
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280", // gray-500
  },
  errorBox: {
    backgroundColor: "#FEF2F2", // red-50
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
    width: "100%",
    alignItems: "center",
  },
  errorText: {
    fontSize: 14,
    color: "#DC2626", // red-600
    fontWeight: "500", // font-medium
  },
  form: {
    width: "100%",
    gap: 16, // space-y-4
  },
  inputGroup: {
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151", // gray-700
    marginBottom: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB", // gray-300
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1, // for Android shadow
  },
  inputIconPlaceholder: {
    marginRight: 12,
    color: "#9CA3AF", // gray-400
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1F2937", // gray-800
    paddingVertical: 0, // Essential for RN TextInput to remove default padding
  },
  button: {
    marginTop: 24, // mt-6
    paddingVertical: 12, // py-3
    borderRadius: 8, // rounded-lg
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#2563EB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    gap: 8,
  },
  buttonEnabled: {
    backgroundColor: "#2563EB", // blue-600
  },
  buttonDisabled: {
    backgroundColor: "#60A5FA", // blue-400
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  tipContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  tipText: {
    fontSize: 12,
    color: "#9CA3AF", // gray-400
  },
});

export default LoginScreen;
