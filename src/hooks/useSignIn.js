import { useMutation } from "@apollo/client";
import useAuthStorage from '../hooks/useAuthStorage';
import { SIGNIN_USER } from "../graphql/mutations";

const useSignIn = () =>{
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGNIN_USER);

  const signIn = async ({ username, password }) => {
    return await mutate({variables: {username, password}});
  };
  return [signIn, result];
};

export default useSignIn;