import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link, useHistory } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bar,
    flexDirection: 'row'
  },
  menuText: {
    color: "white",
    fontSize: 20,
    margin: 15
  }
});

const AppBar = () => {
  const { data, loading } = useQuery(GET_AUTHORIZED_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const authorizedUser = data ? data.authorizedUser : undefined;
  let history = useHistory();

  if (loading) {
    return null;
  }

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push('/');
  };

  //Check if user is logged in
  if (authorizedUser) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to='/'>
            <Text fontWeight="bold" style={styles.menuText}>Repositories</Text>
          </Link>

          <Link to='/reviewForm'>
            <Text fontWeight="bold" style={styles.menuText}>Create review</Text>
          </Link>

          <Link to='/reviews'>
            <Text fontWeight="bold" style={styles.menuText}>My reviews</Text>
          </Link>

          <Pressable onPress={signOut}>
            <View>
              <Text fontWeight="bold" style={styles.menuText}>Signout</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>);
  }
  else {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to='/'>
            <Text fontWeight="bold" style={styles.menuText}>Repositories</Text>
          </Link>

          <Link to='/signin'>
            <Text fontWeight="bold" style={styles.menuText}>Sign in</Text>
          </Link>

          <Link to='/signup'>
            <Text fontWeight="bold" style={styles.menuText}>Sign up</Text>
          </Link>
        </ScrollView>
      </View>);
  }
};

export default AppBar;
