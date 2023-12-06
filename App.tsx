import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DrawerHomePage from './src/components/home/DrawerHomePage';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>aaaaa</Text>
      <DrawerHomePage />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
