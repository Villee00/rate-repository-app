import React from 'react';
import { Text } from 'react-native';

const RepositoryItem = ({repository}) =>{
  console.log(repository);
  return(
    <Text>{`
      Full Name: ${repository.fullName}
      Description: ${repository.description}
      Language: ${repository.language}
      Stars: ${repository.stargazersCount}
      Forks: ${repository.forksCount}
      Reviews: ${repository.reviewCount}
      Rating: ${repository.ratingAverage}
      `
    }
    </Text>
  );
};

export default RepositoryItem;