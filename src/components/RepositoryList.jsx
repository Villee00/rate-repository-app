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
  const variables = {
    OrderBy: vars[0],
    OrderDirection: vars[1],
    SearchKeyword: filter
  };

  const { repositories } = useRepositories(variables);

  return <RepositoryListContainer orderBy={orderBy} handleChange={setOrderBy} textFieldChange={debounceText} repositories={repositories} />;
};

export default RepositoryList;
