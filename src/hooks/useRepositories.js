import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, refetch, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!loading) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, refetch };
};

export default useRepositories;