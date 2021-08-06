import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, handleChange,orderBy }) => {
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
        <Picker.item label="Latest repositories" value="CREATED_AT ASC" />
        <Picker.item label="Highest rated repositories" value="RATING_AVERAGE ASC" />
        <Picker.item label="Lowest rated repositories" value="RATING_AVERAGE DESC" />
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

export default RepositoryListContainer;