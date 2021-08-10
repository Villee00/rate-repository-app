import React from "react";
import { FlatList } from "react-native";
import useUserReviews from "../hooks/useUserReviews";
import { ItemSeparator } from "./RepositoryListContainer";
import ReviewItem from "./ReviewItem";

const UserReviews = () => {
  const { reviews, loading } = useUserReviews();

  if (loading) {
    return null;
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default UserReviews;