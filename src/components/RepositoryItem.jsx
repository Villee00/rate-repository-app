import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryStats from './RepositoryItemComponents/RepositoryStats';
import RepositoryInfo from './RepositoryItemComponents/RespositoryInfo';

const style = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainContainer: {
    paddingBottom: 20,
    paddingTop: 5,
    backgroundColor: 'white'
  }
});

const RepositoryItem = ({ repository }) => {
  if (repository.forksCount)
    return (
      <View testID="repositoryItem" style={style.mainContainer}>
        <RepositoryInfo repository={repository} />
        <View style={style.statsContainer}>
          <RepositoryStats testID="Stars"  label="Stars"  amount={repository.stargazersCount} />
          <RepositoryStats testID="Forks"  label="Forks"  amount={repository.forksCount} />
          <RepositoryStats testID="Reviews"label="Reviews" amount={repository.reviewCount} />
          <RepositoryStats testID="Rating" label="Rating"  amount={repository.ratingAverage} />
        </View>
      </View>
    );
};

export default RepositoryItem;