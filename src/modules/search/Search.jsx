import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import * as searchActions from './actions/actions';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  search() {
    const { actions } = this.props;
    const { searchValue } = this.state;
    actions.runUserSearch(searchValue);
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <label htmlFor="userSearch">
          Search for user:
          <input
            type="text"
            id="userSearch"
            value={searchValue}
            name="userSearch"
            onChange={this.onChange}
          />
        </label>
        <Button type="submit" value="submit" onClick={this.search} onKeyPress={this.search}>Search</Button>
      </div>
    );
  }
}

Search.propTypes = {
  actions: PropTypes.shape({
    runUserSearch: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(searchActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Search);
