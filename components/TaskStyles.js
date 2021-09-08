import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginVertical: 5,
  },
  todoItem: {
    fontSize: 30,
    color: 'rgba(227, 227, 227, .8)',
  },
});

export default styles;
