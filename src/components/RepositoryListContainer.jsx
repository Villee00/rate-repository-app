import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: '#e1e4e8'
  }
});

export const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, handleChange, orderBy, textFieldChange }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <RepositoryItem isSingle={false} repository={item} />
  );
  return (
    <View>
      <Searchbar
        onChangeText={textFieldChange}
      />
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


export default RepositoryListContainer;