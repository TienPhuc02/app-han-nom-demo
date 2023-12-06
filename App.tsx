import React, {useRef, useState} from 'react';
import {
  DrawerLayoutAndroid,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import DrawerHomePage from './src/components/home/DrawerHomePage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

const App = () => {
  const drawerRef = useRef<DrawerLayoutAndroid | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    drawerRef.current?.openDrawer();
    setIsDrawerOpen(true);
  };
  return (
    <View style={styles.container}>
      {!isDrawerOpen && (
        <TouchableOpacity onPress={handleDrawerOpen}>
          <FontAwesomeIcon icon={faBars} />
        </TouchableOpacity>
      )}
      <DrawerHomePage drawerRef={drawerRef} setIsDrawerOpen={setIsDrawerOpen} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
