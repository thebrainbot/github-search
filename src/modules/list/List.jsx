import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../card/Card';

function List({ nodes }) {
  return (
    <div>
      {nodes
        ? nodes.map((cardData) => (
          <Card
            key={cardData.id}
            image={cardData.avatarUrl}
            title={cardData.name}
            description={cardData.bio}
            link={cardData.url}
          />
        ))
        : <div>Loading Content</div>}
    </div>
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
