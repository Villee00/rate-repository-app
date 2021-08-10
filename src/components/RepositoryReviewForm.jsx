import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useHistory } from "react-router-native";
import * as yup from 'yup';
import useCreateReview from "../hooks/useCreateReview";

import FormikTextInput from "./FormikTextInput";

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5
  }
});

const initalValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: ''
};

const validation = yup.object().shape({
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  ownerName: yup
    .string()
    .required('Username is required'),
  rating: yup
    .number('Rating needs to be number')
    .max(100, 'Rating needs to be under 100')
    .min(0, 'Rating needs to be more than 0')
    .required('Rating is required'),
  text: yup
    .string()
});

const RepositoryReviewForm = () => {
  let history = useHistory();
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    let { repositoryName, ownerName, rating, text } = values;
    rating = parseInt(rating);

    try {
      const { data } = await createReview({ repositoryName, ownerName, rating, text });
      history.push(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initalValues}
      onSubmit={onSubmit}
      validationSchema={validation}
    >
      {({ handleSubmit }) => (
        <View style={style.container}>
          <FormikTextInput name="ownerName" placeholder="Repository owner name" />
          <FormikTextInput name="repositoryName" placeholder="Repository name" />
          <FormikTextInput name="rating" placeholder="Rateing between 0 and 100" />
          <FormikTextInput multiline={true} name="text" placeholder="Written text of the repository" />
          <Button onPress={handleSubmit} title="Create text" />
        </View>
      )}

    </Formik>
  );
};
export default RepositoryReviewForm;