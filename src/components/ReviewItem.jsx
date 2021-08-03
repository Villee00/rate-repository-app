import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import { format } from 'date-fns';

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop:5,
    paddingBottom:5,
    backgroundColor: "white"
  },
  rateing: {
    padding: 10,
    minWidth:50,
  },
  rateingText:{
    borderWidth:2,
    borderRadius:100,
    padding:5,
    alignSelf:"center"
  },
  mainInfo: {
    flexDirection:"column",
    flexShrink:1
  }
});

const ReviewItem = ({ review }) => {
  const date = format(new Date(review.createdAt), 'dd-MM-yyyy');
  return (
    <View style={style.container}>
      <View style={style.rateing}>
        <Text style={style.rateingText}>{review.rating}</Text>
      </View>
      <View style={style.mainInfo}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text>{date}</Text>
        <Text fontSize="subheading">{review.text}</Text>

      </View>

    </View>
  );
};

export default ReviewItem;