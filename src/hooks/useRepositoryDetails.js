import { GET_REPOSITORY } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useRepositoryDetails = (variables) =>{
  const { loading, data, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    variables,
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if(!canFetchMore){
      return null;
    }

    fetchMore({
      variables:{
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      }
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositoryDetails;