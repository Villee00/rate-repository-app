import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15
  },
});

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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema} >
      {({ handleSubmit }) => (
        <View style={style.container}>
          <FormikTextInput name="username" placeholder="username" />
          <FormikTextInput name="password" placeholder="password" secureTextEntry />
          <Button onPress={handleSubmit} title="Sign in" />
        </View>
      )}

    </Formik>
  );
};

export default SignIn;