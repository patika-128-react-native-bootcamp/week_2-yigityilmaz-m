import React, {useState} from 'react';
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

const ListItem = ({todo}) => {
  return (
    <View style={styles.listItem}>
      <Text style={{fontSize: 15, color: 'black'}}> {todo?.name} </Text>
      <Text style={{fontSize: 15, fontWeight: 'bold' ,color: 'black'}}> {todo?.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    borderTopWidth:1,
    borderTopColor: 'black',
  },
});
export default ListItem;
