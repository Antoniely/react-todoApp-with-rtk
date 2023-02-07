import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

export default function TodoHeaders() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert("Please enter a task");
      setTodo("");
    }
    dispatch(
      addTask({
        task: todo,
      })
    );
    setTodo("");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Todo List</Text>
      {/* TextInput */}
      <TextInput
        style={styles.textInput}
        placeholder="Add todo"
        onChangeText={setTodo}
        value={todo}
      />
      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={onSubmitTask}>
        <Text style={styles.textButton}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#000",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "90%",
  },
  textButton: {
    color: "#fff",
  },
});
