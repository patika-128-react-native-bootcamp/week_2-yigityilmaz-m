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
    const newItem = {
      id: i,
      name: Name,
      price: Price,
    };
    if (Name != '' && Price != '') {
      console.log(newItem);
      setItems([...Items, newItem]);
    }
    setPrice('');
    setName('');
  };

  const artanHandler = () => {
    
    let newItems = Items.sort(
      (a, b) => parseInt(a.price, 10) - parseInt(b.price, 10),
    );

    setItems([...newItems]);
  };

  const azalanHandler = () => {
    let newItems = Items.sort(
      (a, b) => parseInt(b.price, 10) - parseInt(a.price, 10),
    );
    setItems([...newItems]);
  };

  const tarihHandler = () => {
    let newItems = Items.sort(
      (a, b) => parseInt(a.id, 10) - parseInt(b.id, 10),
    );
    setItems([...newItems]);
  };

  return (
    <SafeAreaView flex={1}>
      <View style={styles.container1}>
        <Button
          style={styles.artanButton}
          title="Artan Fiyat"
          color={'#b5b5b5'}
          onPress={artanHandler}
          underlayColor={'black'}></Button>
        <Button
          style={styles.azalanButton}
          title="Azalan Fiyat"
          color={'#b5b5b5'}
          onPress={azalanHandler}></Button>
        <Button
          style={styles.tarihButton}
          title="Tarih"
          color={'#b5b5b5'}
          onPress={tarihHandler}></Button>
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
            color={'#b5b5b5'}
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
