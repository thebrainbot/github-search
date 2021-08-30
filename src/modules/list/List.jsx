import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import Card from '../card/Card';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'auto',
  },
}));

function List({ nodes }) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={`${classes.root} card-list`}
      spacing={3}
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      data-test-id="card-list"
    >
      {nodes
        && nodes.map((cardData) => (
          <Card
            key={cardData.id}
            id={cardData.id}
            image={cardData.avatarUrl}
            company={cardData.company}
            name={cardData.name}
            login={cardData.login}
            description={cardData.bio}
            link={cardData.url}
            starredRepositories={cardData.starredRepositories}
            commitComments={cardData.commitComments}
          />
        ))}
    </Grid>
  );
}

List.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      avatarUrl: PropTypes.string,
      bio: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

List.defaultProps = {
  nodes: [],
};

function mapStateToProps(state) {
  const { searchReducers: search } = state;
  return { nodes: search.nodes };
}

export default connect(
  mapStateToProps,
)(List);
