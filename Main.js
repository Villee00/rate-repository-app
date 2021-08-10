import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './src/components/RepositoryList';
import AppBar from './src/components/AppBar';
import {  Route, Switch } from 'react-router-native';
import SignIn from './src/components/SignIn';
import theme from './src/theme';
import RepositoryDetails from './src/components/RepositoryDetails';
import RepositoryReviewForm from './src/components/RepositoryReviewForm';
import Signup from './src/components/Singup';
import UserReviews from './src/components/UserReviews';

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
        <Route path='/signup' exact>
          <Signup/>
        </Route>
        <Route path='/reviews' exact>
          <UserReviews/>
        </Route>
      </Switch>
    </View>
  );
};

export default Main;