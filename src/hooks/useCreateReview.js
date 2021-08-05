import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    let payload = null;
    if (text !== '') {
      payload = await mutate({ variables: { repositoryName, ownerName, rating, text } });
    }
    else {
      payload = await mutate({ variables: { repositoryName, ownerName, rating } });
    }
    return payload;
  };
  return [createReview, result];
};

export default useCreateReview;