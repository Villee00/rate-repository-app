import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8'
  }
});

export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, handleChange,orderBy }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <RepositoryItem isSingle={false} repository={item} />
  );
  return (
    <View>
      <Picker selectedValue={orderBy}
        onValueChange={(itemValue) => handleChange(itemValue)}>
        <Picker.Item label="Latest repositories" value="CREATED_AT DESC" />
        <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE DESC" />
        <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE ASC" />
      </Picker>

      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};


const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT DESC');
  const vars = orderBy.split(' ');
  const variables ={
    OrderBy: vars[0],
    OrderDirection: vars[1]
  };
  const { repositories } = useRepositories(variables);

  return <RepositoryListContainer orderBy={orderBy} handleChange={setOrderBy} repositories={repositories} />;
};

export default RepositoryList;
