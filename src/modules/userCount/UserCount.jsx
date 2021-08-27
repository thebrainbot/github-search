import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function UserCount({ userCount }) {
  return (
    <div>
      {userCount > 0
        ? (
          <div>
            {userCount}
            {' '}
            users found
          </div>
        )
        : <div>No users found</div>}
    </div>
  );
}

UserCount.propTypes = {
  userCount: PropTypes.number,
};

UserCount.defaultProps = {
  userCount: 0,
};

function mapStateToProps(state) {
  const { searchReducers: search } = state;
  return { userCount: search.userCount };
}

export default connect(
  mapStateToProps,
)(UserCount);
