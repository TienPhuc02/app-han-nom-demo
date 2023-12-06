import React, {MutableRefObject} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';
interface TypePropsDrawerHomePage {
  drawerRef: MutableRefObject<DrawerLayoutAndroid | null>;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DrawerHomePage = (props: TypePropsDrawerHomePage) => {
  const {drawerRef, setIsDrawerOpen} = props;
  const handleDrawerClose = () => {
    drawerRef.current?.closeDrawer();
    setIsDrawerOpen(false);
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => {
          handleDrawerClose();
        }}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      renderNavigationView={navigationView}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default DrawerHomePage;
