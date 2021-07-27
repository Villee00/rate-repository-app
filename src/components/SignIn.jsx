import { Formik } from 'formik';
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './FormikTextInput';

const style=StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor:'white',
    padding:10,
    flexShrink:0,

  },
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
    <Formik initialValues={initialValues} onSubmit={onSubmit} >
      <View style={style.container}>
        <FormikTextInput name="userName" placeholder="username" />
        <FormikTextInput name="password" placeholder="password" secureTextEntry/>
        <Button onPress={onSubmit} title="Sign in"/>
      </View>
    </Formik>
  );
};

export default SignIn;