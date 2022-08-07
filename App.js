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
  { name: 'clean room', key: 1 },
  { name: 'trash garbage', key: 2 },
  { name: 'go shopping', key: 3 },
];

export default function App() {
  const renderItem = ({item}) => {
    return (
      <Text>{ item.name }</Text>
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
  }
});
