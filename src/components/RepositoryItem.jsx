import { Linking } from 'expo';
import React from 'react';
import { Button, Pressable, StyleSheet, View } from 'react-native';
import { useHistory } from 'react-router-native';
import RepositoryStats from './RepositoryItemComponents/RepositoryStats';
import RepositoryInfo from './RepositoryItemComponents/RespositoryInfo';
import Text from './Text';

const style = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainContainer: {
    paddingBottom: 20,
    paddingTop: 5,
    backgroundColor: 'white'
  },
  buttonView:{
    margin:15
  }
});

const RepositoryItem = ({ repository, isSingle }) => {
  let history = useHistory();
  if (!isSingle) {
    const onPress = () =>{
      history.push(`/${repository.id}`);

    };
    return (
      <Pressable onPress={onPress}>
        <View testID="repositoryItem" style={style.mainContainer}>
          <RepositoryInfo repository={repository} />
          <View style={style.statsContainer}>
            <RepositoryStats testID="Stars" label="Stars" amount={repository.stargazersCount} />
            <RepositoryStats testID="Forks" label="Forks" amount={repository.forksCount} />
            <RepositoryStats testID="Reviews" label="Reviews" amount={repository.reviewCount} />
            <RepositoryStats testID="Rating" label="Rating" amount={repository.ratingAverage} />
          </View>
        </View>
      </Pressable>
    );
  }
  else {
    const onPress = () => {
      Linking.openURL(repository.url);
    };
    return (
      <View testID="repositoryItem" style={style.mainContainer}>
        <RepositoryInfo repository={repository} />
        <View style={style.statsContainer}>
          <RepositoryStats testID="Stars" label="Stars" amount={repository.stargazersCount} />
          <RepositoryStats testID="Forks" label="Forks" amount={repository.forksCount} />
          <RepositoryStats testID="Reviews" label="Reviews" amount={repository.reviewCount} />
          <RepositoryStats testID="Rating" label="Rating" amount={repository.ratingAverage} />
        </View>
        <View style={style.buttonView}>
        <Button onPress={onPress} title="Open on github"/>
        </View>
      </View>
    );
  }

};

export default RepositoryItem;