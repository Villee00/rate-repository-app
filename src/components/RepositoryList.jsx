import React, { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import { useDebouncedCallback } from 'use-debounce';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT DESC');
  const [filter, setFilter] = useState('');

  const debounceText = useDebouncedCallback((value) => {
    setFilter(value);
  }, 500);

  const vars = orderBy.split(' ');

  const { repositories, fetchMore } = useRepositories({
    First: 8,
    OrderBy: vars[0],
    OrderDirection: vars[1],
    SearchKeyword: filter
  });

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer
    onEndReach={onEndReach}
    orderBy={orderBy}
    handleChange={setOrderBy}
    textFieldChange={debounceText}
    repositories={repositories} />;
};

export default RepositoryList;
