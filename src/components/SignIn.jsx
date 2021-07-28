import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './FormikTextInput';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15
  },
});

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  userName: '',
  password: ''
};
const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema} >
      {({ handleSubmit }) => (
        <View style={style.container}>
          <FormikTextInput name="userName" placeholder="username" />
          <FormikTextInput name="password" placeholder="password" secureTextEntry />
          <Button onPress={handleSubmit} title="Sign in" />
        </View>
      )}

    </Formik>
  );
};

export default SignIn;