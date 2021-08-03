import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";

const RepositoryDetails = () =>{
  const {id} = useParams();
  
  const {loading, error, data} = useQuery(GET_REPOSITORY,{
    variables: {id}
  });

  if(loading) return null;


  return(
    <RepositoryItem repository={data.repository} isSingle={true}/>
  );
};

export default RepositoryDetails;