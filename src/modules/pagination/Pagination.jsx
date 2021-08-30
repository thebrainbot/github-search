import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import * as searchActions from '../search/actions/actions';
import PaginationButton from './PaginationButton';

const Pagination = (props) => {
  const {
    userCount,
    query,
    pageInfo: {
      hasNextPage,
      hasPreviousPage,
      startCursor,
      endCursor,
    },
    actions,
  } = props;

  const nextPage = () => {
    actions.runUserSearch(query, { endCursor });
  };

  const prevPage = () => {
    actions.runUserSearch(query, { startCursor });
  };

  const pageCount = Math.ceil(userCount / 9);

  return (
    <div>
      <PaginationButton isDisabled={!hasPreviousPage} action={prevPage} label="Prev" />
      <p>
        { pageCount }
        {' '}
        pages
      </p>
      <PaginationButton isDisabled={!hasNextPage} action={nextPage} label="Next" />
    </div>
  );
};

Pagination.propTypes = {
  actions: PropTypes.shape({
    runUserSearch: PropTypes.func,
  }).isRequired,
  query: PropTypes.string,
  userCount: PropTypes.number,
  pageInfo: PropTypes.shape({
    startCursor: PropTypes.string,
    endCursor: PropTypes.string,
    hasPreviousPage: PropTypes.bool,
    hasNextPage: PropTypes.bool,
  }),
};

Pagination.defaultProps = {
  query: '',
  userCount: 0,
  pageInfo: {
    startCursor: null,
    endCursor: null,
    hasPreviousPage: false,
    hasNextPage: false,
  },
};

function mapStateToProps(state) {
  const { searchReducers: search } = state;
  return {
    query: search.query,
    userCount: search.userCount,
    pageInfo: search.pageInfo,
  };
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(searchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
