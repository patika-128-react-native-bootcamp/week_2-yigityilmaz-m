import React, {useState} from 'react';
import ListItem from './components/ListItem';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
let i = 0;
function App() {
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');

  const [Items, setItems] = useState([]);

  const addItemHandler = () => {
    i = i + 1;
    console.log(Name);
    const newItem = {
      id: i,
      name: Name,
      price: Price,
    };

    setItems([...Items, newItem]);
    setPrice('');
    setName('');
  };
  return (
    <SafeAreaView flex={1}>
      <View style={styles.container1}>
        <Button title="Artan Fiyat" color={'gray'}></Button>
        <Button title="Azalan Fiyat" color={'gray'}></Button>
        <Button title="Tarih" color={'gray'}></Button>
      </View>

      <FlatList
        style={styles.flat_list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={Items}
        renderItem={({item}) => <ListItem todo={item} />}
      />

      <View style={styles.add_container}>
        <View flexGrow={1}>
          <Text>Name</Text>
          <TextInput
            style={styles.textInp}
            value={Name}
            onChangeText={name => setName(name)}></TextInput>
          <Text>Price</Text>
          <TextInput
            style={styles.textInp}
            value={Price}
            onChangeText={price => setPrice(price)}></TextInput>
          <Button
            title="Add"
            margin={10}
            color={'gray'}
            onPress={addItemHandler}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  flat_list: {
    maxHeight: '70%',
  },

  add_container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  textInp: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 5,
    height: 35,
  },
});

export default App;
