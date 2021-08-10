import { useMutation } from "@apollo/client";
import { Linking } from "expo";
import React from "react";
import { Alert, FlatList } from "react-native";
import { DELETE_REVIEW } from "../graphql/mutations";
import useUserReviews from "../hooks/useUserReviews";
import { ItemSeparator } from "./RepositoryListContainer";
import UserReviewsItem from "./UserReviewsItem";

const UserReviews = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);
  const { reviews, loading, refetch } = useUserReviews();

  if (loading) {
    return null;
  }

  const onPressLink = (url) => {
    Linking.openURL(url);
  };

  const onPressDelete = (id) => Alert.alert(
    "Delete review",
    "Are you sure you want to delete this review?",
    [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "Yes",
        onPress: async () => {
          await mutate({ variables: { id } });
          refetch();
        }
      }
    ]
  );
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <UserReviewsItem review={item.node} onPressLink={onPressLink} onPressDelete={onPressDelete} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default UserReviews;