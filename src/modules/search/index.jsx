import React from 'react';
import { runUserSearch } from './actions/actions';

function Search() {
  runUserSearch('bnash');
  return (
    <div> Hopefully searching </div>
  );
}

export default Search;
