import { GET_AUTHORIZED_USER } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const useUserReviews = () =>{
  const { loading, data, ...result } = useQuery(GET_AUTHORIZED_USER, {
    variables:{
      includeReviews: true
    },
    fetchPolicy: 'cache-and-network'
  });

  return {
    reviews: data?.authorizedUser.reviews.edges,
    loading,
    ...result,
  };
};

export default useUserReviews;