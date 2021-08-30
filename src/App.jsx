import React from 'react';
import { Container } from '@material-ui/core';

import './App.css';
import List from './modules/list/List';
import Header from './modules/header/Header';
import Search from './modules/search/Search';
import UserCount from './modules/userCount/UserCount';
import Pagination from './modules/pagination/Pagination';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxwidth="sm">
        <Search />
        <UserCount />
        <List />
        <Pagination />
      </Container>
    </div>
  );
}

export default App;
