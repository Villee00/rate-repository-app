import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import Text from "./Text";
import { format } from 'date-fns';
import { Button } from "react-native-paper";
import theme from "../theme";
import { Linking } from "expo";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "white"
  },
  rateing: {
    padding: 10,
    minWidth: 50,
  },
  rateingText: {
    borderWidth: 2,
    borderRadius: 100,
    padding: 5,
    alignSelf: "center"
  },
  mainInfo: {
    flexDirection: "column",
    flexShrink: 1
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    margin: 5
  }
});

const UserReviewsItem = ({ review, onPressLink, onPressDelete }) => {
  const date = format(new Date(review.createdAt), 'dd-MM-yyyy');

  return (
    <View style={style.container}>
      <View style={style.rateing}>
        <Text style={style.rateingText}>{review.rating}</Text>
      </View>
      <View style={style.mainInfo}>
        <Text fontWeight="bold">{review.repository.fullName}</Text>
        <Text>{date}</Text>
        <Text fontSize="subheading">{review.text}</Text>
        <View style={style.buttons}>
          <Button onPress={() => onPressLink(review.repository.url)} style={style.button} mode="contained" color={theme.colors.primary}>View repository</Button>
          <Button onPress={() => onPressDelete(review.id)} style={style.button} mode="contained" color={theme.colors.error}>Delete review</Button>

        </View>
      </View>
    </View>
  );
};

export default UserReviewsItem;