import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity , Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React</Text>
      <TouchableOpacity >

      <Image source={{
        width: 200,
        height:300,
        uri: "https://picsum.photos/200/300"
      }}></Image>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
