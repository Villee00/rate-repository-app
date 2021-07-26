import React from 'react';
import Text from './Text';

const RepositoryItem = ({repository}) =>{
  return(
    <>
      <Text>Full Name: {repository.fullName}</Text>
      <Text>Description: {repository.description}</Text>
      <Text>Language: {repository.language}</Text>
      <Text>Stars: {repository.stargazersCount}</Text>
      <Text>Forks: {repository.forksCount}</Text>
      <Text>Reviews: {repository.reviewCount}</Text>
      <Text>Rating: {repository.ratingAverage}</Text> 
    </>
  );
};

export default RepositoryItem;