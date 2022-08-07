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

const todos = [
  { name: 'Clean room', key: 1 },
  { name: 'Trash garbage', key: 2 },
  { name: 'Go shopping', key: 3 },
];

export default function App() {
  const renderItem = ({item}) => {
    return (
      <View style={ styles.item }>
        <Text style={ styles.itemName }>{ item.name }</Text>
        <Text>Delete</Text>
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
  }
});
