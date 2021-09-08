import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [value, setValue] = useState('');
  const [task, setTask] = useState([
    // {
    //   text: 'walk the dog',
    //   key: '1',
    // },
    // {
    //   text: 'Go cook',
    //   key: '2',
    // },
    // {
    //   text: 'lundry',
    //   key: '3',
    // },
  ]);

  const deleteHandler = (key) => {
    setTask((prevTasks) => {
      return prevTasks.filter((todo) => todo.key !== key);
    });
  };

  const addTaskHandler = (text) => {
    setTask([...task, { text: text, key: Math.random().toString() }]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Today's Tasks </Text>
        <View>
          <FlatList
            data={task}
            renderItem={({ item }) => (
              <Task item={item} deleteHandler={deleteHandler} />
            )}
          />
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.inputContainer}
        behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          onChangeText={(value) => setValue(value)}
          style={styles.input}
          placeholder='write yout task here...'
        />
        <TouchableOpacity
          onPress={() => addTaskHandler(value)}
          style={styles.addBtn}
        >
          <Text style={styles.btnText}>Add Task</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#999',
    paddingTop: 70,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 34,
    color: '#ddd',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 5,
    fontSize: 24,
    flex: 3,
    borderRadius: 5,
  },
  addBtn: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#565',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
