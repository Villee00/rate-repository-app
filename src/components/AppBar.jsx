import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bar
  },
  menuText: {
    color: "white",
    fontSize:20,
    margin:20
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <Text fontWeight="bold" style={styles.menuText}>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;
