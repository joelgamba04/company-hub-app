// File: app/services/calculator.jsx
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Calculator</Text>
      <TextInput
        placeholder="First number"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Second number"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Add" onPress={() => setResult(Number(a) + Number(b))} />
      {result !== null && (
        <Text style={{ marginTop: 20 }}>Result: {result}</Text>
      )}
    </View>
  );
}
