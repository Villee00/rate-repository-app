import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './src/components/RepositoryList';
import AppBar from './src/components/AppBar';
import {  Route, Switch } from 'react-router-native';
import SignIn from './src/components/SignIn';
import theme from './src/theme';
import RepositoryDetails from './src/components/RepositoryDetails';
import RepositoryReviewForm from './src/components/RepositoryReviewForm';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    display:'flex',
    backgroundColor: theme.colors.background
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
        <Route path='/repository/:id'>
          <RepositoryDetails/>
        </Route>
        <Route path='/reviewForm'>
          <RepositoryReviewForm/>
        </Route>
        
      </Switch>
    </View>
  );
};

export default Main;