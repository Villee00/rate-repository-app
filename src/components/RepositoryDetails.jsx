import React from "react";

import { useParams } from "react-router-native";

import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";
import RepositoryItem from "./RepositoryItem";
import { ItemSeparator } from "./RepositoryList";
import useRepositoryDetails from "../hooks/useRepositoryDetails";

const RepositoryDetails = () => {
  const { id } = useParams();
  const {repository, fetchMore, loading} = useRepositoryDetails({
    id,
    first: 4
  });

  if(loading){
    return null;
  }

  const handleListEnd = () =>{
    console.l;
    fetchMore();
  };

  const reviews = repository.reviews.edges;
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => <RepositoryItem repository={repository} isSingle={true} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={handleListEnd}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryDetails;