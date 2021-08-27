import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import * as searchActions from './modules/search/actions/actions';

function App({ loading, userCount, actions }) {
  const runSearch = () => {
    actions.runUserSearch('bnash');
  };
  return (
    <div className="App">
      { loading }
      {' '}
      -
      {' '}
      { userCount}
      <header className="App-header">
        <div role="button" tabIndex="0" onClick={runSearch} onKeyPress={runSearch}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  userCount: PropTypes.number,
  actions: PropTypes.shape({
    runUserSearch: PropTypes.func,
  }).isRequired,
};

App.defaultProps = {
  loading: false,
  userCount: 0,
};

function mapStateToProps(state) {
  const { searchReducers: search } = state;
  return { loading: search.loading, userCount: search.userCount };
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(searchActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
