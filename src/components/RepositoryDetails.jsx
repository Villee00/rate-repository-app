import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../graphql/queries";
import { FlatList } from "react-native";
import ReviewItem from "./ReviewItem";
import RepositoryItem from "./RepositoryItem";
import { ItemSeparator } from "./RepositoryList";

const RepositoryDetails = () =>{
  const {id} = useParams();
  
  const {loading, error, data} = useQuery(GET_REPOSITORY,{
    variables: {id}
  });

  if(loading) return null;
  const repository = data.repository;
  const reviews = repository.reviews.edges;
  return(
    <FlatList
    data={reviews}
    renderItem={({item}) => <ReviewItem review={item.node} key={item.node.id}/>}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={() => <RepositoryItem repository={repository} isSingle={true}/>}
    ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryDetails;