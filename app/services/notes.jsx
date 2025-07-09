// File: app/services/notes.jsx
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addNote = () => {
    if (editingIndex !== null) {
      const updated = [...notes];
      updated[editingIndex] = text;
      setNotes(updated);
      setEditingIndex(null);
    } else {
      setNotes([...notes, text]);
    }
    setText("");
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  const editNote = (index) => {
    setText(notes[index]);
    setEditingIndex(index);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Notes</Text>
      <TextInput
        placeholder="Write a note"
        value={text}
        onChangeText={setText}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button
        title={editingIndex !== null ? "Update Note" : "Add Note"}
        onPress={addNote}
      />
      <FlatList
        data={notes}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
            }}>
            <Text>{item}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => editNote(index)}>
                <Text style={{ marginHorizontal: 5 }}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteNote(index)}>
                <Text>🗑️</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
