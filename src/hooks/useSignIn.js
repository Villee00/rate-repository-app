import { useApolloClient, useMutation } from "@apollo/client";
import useAuthStorage from '../hooks/useAuthStorage';
import { SIGNIN_USER } from "../graphql/mutations";

const useSignIn = () =>{
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGNIN_USER);

  const signIn = async ({ username, password }) => {
    const {data} = await mutate({variables: {username, password}});
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
  };
  return [signIn, result];
};

export default useSignIn;