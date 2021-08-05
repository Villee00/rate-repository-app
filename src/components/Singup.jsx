import { Formik } from 'formik';
import React from 'react';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import { Button, View } from 'react-native';
import theme from '../theme';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initalValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required').min(5),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirmation is required')
});

const Signup =  () => {
  const [signIn] = useSignIn();
  const [mutate] = useMutation(CREATE_USER);
  let history = useHistory();

  const onSubmit = async (values) => {
    const {username, password} = values;
    await mutate({
      variables: {username, password}
    });
    await signIn({username, password});
    history.push('/');
  };

  return (
    <Formik
      initialValues={initalValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >{({ handleSubmit }) => (
      <View style={theme.container}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
        <FormikTextInput name="passwordConfirmation" placeholder="Password confirmation" secureTextEntry/>
        <Button onPress={handleSubmit} title="sign up"/>
      </View>)
      }

    </Formik>
  );
};

export default Signup;