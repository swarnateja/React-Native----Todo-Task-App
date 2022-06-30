import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Task = ({text}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#00ffff',
    opacity: 0.4,
    borderRadius: 10,
  },
  itemText: {
    maxWidth: '70%',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  circular: {
    height: 12,
    width: 12,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
  },
});
export default Task;
