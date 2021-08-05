import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';
import theme from '../theme';


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: ''
};

export const SignInFrom = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema} >
      {({ handleSubmit }) => (
        <View style={theme.container}>
          <FormikTextInput testID="username" name="username" placeholder="Username" />
          <FormikTextInput testID="password" name="password" placeholder="Password" secureTextEntry />
          <Button testID="submitButton" onPress={handleSubmit} title="Sign in" />
        </View>
      )}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  let history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInFrom onSubmit={onSubmit} />
  );
};

export default SignIn;