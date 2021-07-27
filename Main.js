import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './src/components/RepositoryList';
import AppBar from './src/components/AppBar';
import { Redirect, Route, Switch } from 'react-router-native';
import SignIn from './src/components/SignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    display:'flex'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route path='/' exact>
          <RepositoryList/>
        </Route>
        <Route path='/signin' exact>
          <SignIn/>
        </Route>
        <Redirect to='/'/>
      </Switch>
    </View>
  );
};

export default Main;