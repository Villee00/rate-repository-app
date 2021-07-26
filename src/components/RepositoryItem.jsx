import React from 'react';
import { StyleSheet, View} from 'react-native';
import RepositoryStats from './RepositoryItemComponents/RepositoryStats';
import RepositoryInfo from './RepositoryItemComponents/RespositoryInfo';

const style = StyleSheet.create({
  statsContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  mainContainer:{
    paddingBottom:20,
    paddingTop:5
  }
});

const RepositoryItem = ({repository}) =>{
  if(repository.forksCount)
  return(
    <View style={style.mainContainer}>
      <RepositoryInfo repository={repository}/>
      <View style={style.statsContainer}>
        <RepositoryStats label="Stars" amount={repository.stargazersCount}/>
        <RepositoryStats label="Forks" amount={repository.forksCount}/>
        <RepositoryStats label="Reviews" amount={repository.reviewCount}/>
        <RepositoryStats label="Rating" amount={repository.ratingAverage}/>
      </View>
    </View>
  );
};

export default RepositoryItem;