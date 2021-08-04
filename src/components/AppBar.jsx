import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_AUTHORIZEDUSER } from '../graphql/queries';
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
  const { data, loading, refetch } = useQuery(GET_AUTHORIZEDUSER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const authorizedUser = data ? data.authorizedUser : undefined;

  if (loading) {
    return null;
  }

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    await refetch();
  };


  return <View style={styles.container}>
    <ScrollView horizontal>
      <Link to='/'>
        <Text fontWeight="bold" style={styles.menuText}>Repositories</Text>
      </Link>

      {authorizedUser ? <Link to='/reviewForm'>
        <Text fontWeight="bold" style={styles.menuText}>Create review</Text>
      </Link>:null}

      {authorizedUser ? <Pressable onPress={signOut}><Text fontWeight="bold" style={styles.menuText}>Signout</Text></Pressable> :
        <Link to='/signin'>
          <Text fontWeight="bold" style={styles.menuText}>Sign in</Text>
        </Link>}

    </ScrollView>
  </View>;
};

export default AppBar;
