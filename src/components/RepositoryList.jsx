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
    first: 8,
    orderBy: vars[0],
    orderDirection: vars[1],
    searchKeyword: filter
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
