import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './TaskStyles.js';

const Task = ({ item, deleteHandler }) => {
  return (
    <View style={styles.todoItemContainer}>
      <Text style={styles.todoItem}>{item.text}</Text>

      <TouchableOpacity onPress={() => deleteHandler(item.key)}>
        <Feather name='trash' size={24} color='rgba(247, 247, 247, .6)' />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
