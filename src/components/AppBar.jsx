import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bar,
    flexDirection:'row'
  },
  menuText: {
    color: "white",
    fontSize:20,
    margin:20
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <Link to='/'>
        <Text fontWeight="bold" style={styles.menuText}>Repositories</Text>
      </Link>
      <Link to='/signin'>
        <Text fontWeight="bold" style={styles.menuText}>Sign in</Text>
      </Link>
    </ScrollView>
  </View>;
};

export default AppBar;
