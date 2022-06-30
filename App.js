import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   RefreshControl,
//   TextInput,
// } from 'react-native';

// const App = () => {
//   const [name, setName] = useState('');

//   return (
//     <View style={styles.body}>
//       <Text style={styles.text}>Please enter Your Name</Text>
//       <TextInput style={styles.input} onChangeText={value => setName(value)} />
//       <Text style={styles.text}>Your name is {name}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#ffffff',
//   },
//   item: {
//     margin: 10,
//     backgroundColor: '#4ae1fa',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#000000',
//     fontSize: 25,
//     fontStyle: 'italic',
//     margin: 10,
//     alignItems: 'center',
//   },
//   input: {
//     borderWidth: 1,
//   },
// });

// export default App;

// import React, {useState} from 'react';
// import {StyleSheet, View, Text, ScrollView, RefreshControl} from 'react-native';

// const App = () => {
//   const [Items, setItems] = useState([
//     {key: 1, item: 'Item 1'},
//     {key: 2, item: 'Item 2'},
//     {key: 3, item: 'Item 3'},
//     {key: 4, item: 'Item 4'},
//     {key: 5, item: 'Item 5'},
//     {key: 6, item: 'Item 6'},
//     {key: 7, item: 'Item 7'},
//     {key: 8, item: 'Item 8'},
//     {key: 44, item: 'Item 9'},
//     {key: 68, item: 'Item 27'},
//     {key: 0, item: 'Item 78'},
//   ]);
//   const [Refreshing, setRefreshing] = useState(false);

//   const onRefresh = () => {
//     setRefreshing(true);
//     setItems([...Items, {key: 69, item: 'Item 69'}]);
//     setRefreshing(false);
//   };

// //   return (
// //     <ScrollView
// //       style={styles.body}
// //       refreshControl={
// //         <RefreshControl
// //           refreshing={Refreshing}
// //           onRefresh={onRefresh}
// //           colors={['#ff00ff']}
// //         />
// //       }>
// //       {Items.map(object => {
// //         return (
// //           <View style={styles.item} key={object.key}>
// //             <Text style={styles.text}>{object.item}</Text>
// //           </View>
// //         );
// //       })}
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   body: {
// //     flex: 1,
// //     flexDirection: 'column',
// //     backgroundColor: '#ffffff',
// //   },
// //   item: {
// //     margin: 10,
// //     backgroundColor: '#4ae1fa',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   text: {
// //     color: '#000000',
// //     fontSize: 45,
// //     fontStyle: 'italic',
// //     margin: 10,
// //   },
// // });

// // export default App;

// // import React, {useState} from 'react';
// // import {View, Text, Button, StyleSheet} from 'react-native';

// // const App = () => {
// //   const [name, setName] = useState('Teja');
// //   const [session, setSession] = useState({title: 'my', num: 0});
// //   const [current, setCurrent] = useState(true);

// //   const onClickHandler = () => {
// //     setName('Swarnateja');
// //     setSession({title: 'My first', num: 1});
// //     setCurrent(false);
// //   };

// //   return (
// //     <View style={styles.body}>
// //       <Text style={styles.text}>My name is {name}</Text>
// //       <Text style={styles.text}>
// //         {session.title} page, PageNum : {session.num}
// //       </Text>
// //       <Text style={styles.text}>
// //         {current ? 'current Session' : 'next session'}
// //       </Text>
// //       <Button style={styles.btn} title="Update" onPress={onClickHandler} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   body: {
// //     flex: 1,
// //     backgroundColor: 'lightblue',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   text: {
// //     fontFamily: 'Roboto',
// //     fontSize: 20,
// //     color: 'black',
// //   },
// //   btn: {
// //     margin: 10,
// //   },
// // });
// // export default App;

// // // sessio-- - 1;

// // // import React from 'react';
// // // import {View, Text, Button, StyleSheet, Linking} from 'react-native';

// // // const App = () => {
// // //   return (
// // //     <View style={styles.body}>
// // //       <Text style={styles.text}>This is the first page</Text>
// // //       <Text style={styles.text}>you want to go the Next page</Text>
// // //       <Text style={styles.text}>Click this button</Text>
// // //       <Button
// // //         style={styles.btn}
// // //         title="Update"
// // //         onPress={() => {
// // //           Linking.openURL(
// // //             'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox',
// // //           );
// // //         }}
// // //       />
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   body: {
// // //     flex: 1,
// // //     backgroundColor: 'lightblue',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //   },
// // //   text: {
// // //     fontFamily: 'Roboto',
// // //     fontSize: 20,
// // //     color: 'black',
// // //   },
// // //   btn: {
// // //     margin: 10,
// // //   },
// // // });
// // // export default App;
