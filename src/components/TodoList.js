import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const deleteItem = ({ id, name }) => {
    Alert.alert("¿Deseas eliminar esta tarea?", `Tarea: ${name}`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () =>
          dispatch(
            deleteTask({
              id: id,
            })
          ),
      },
    ]);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.titleItem}>{item.name}</Text>
        <TouchableOpacity onPress={() => deleteItem(item)}>
          <Ionicons name="trash-bin-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
  item: {
    borderColor: "#ccc",
    borderWidth: 2,
    width: "90%",
    alignSelf: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleItem: {
    color: "#000",
    fontSize: 18,
  },
});
