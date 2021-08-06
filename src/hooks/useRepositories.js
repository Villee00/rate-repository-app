import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();
  const { data, refetch, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables:{
      ...variables
    }
  });
  useEffect(() => {
    if (!loading) {
      setRepositories(data.repositories);
    }
  }, [data,variables]);

  return { repositories, loading, refetch };
};

export default useRepositories;