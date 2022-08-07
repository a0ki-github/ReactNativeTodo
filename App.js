import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
  { name: 'Clean room', key: 1 },
  { name: 'Trash garbage', key: 2 },
  { name: 'Go shopping', key: 3 },
]);

  const onPressItemDelete = (key) => {
    const newTodos = todos.filter((item) => item.key !== key)
    setTodos(newTodos)
  }

  const renderItem = ({item}) => {
    return (
      <View style={ styles.item }>
        <Text style={ styles.itemName }>{ item.name }</Text>
        <TouchableOpacity
          onPress={() => onPressItemDelete(item.key)}
          style={ styles.deleteView }
        >
          <Text style={ styles.deleteText } >Delete</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={ styles.title }>TODO</Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 80,
  },
  item: {
    width: 300,
    marginBottom: 30,
    alignItems: 'center',
    padding: 10,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  deleteView: {
    width: 50,
    backgroundColor: 'gray',
  },
  deleteText: {
    color: 'white',
    textAlign: 'center',
  }
});
