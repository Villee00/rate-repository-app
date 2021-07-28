import React from 'react';
import Text from '../Text';
import { StyleSheet, View } from 'react-native';

const statsStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10
  }
});

const RepositoryStats = ({ label, amount }) => {
  let amountText = amount;
  if (amount >= 1000) {
    amountText = Math.round(amount / 100) / 10 + "k";
  }
  return (
    <View style={statsStyle.container}>
      <Text fontWeight='bold'>{amountText}</Text>
      <Text>{label}</Text>
    </View>
  );
};

export default RepositoryStats;