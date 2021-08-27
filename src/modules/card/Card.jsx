import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    key, name, image, description, link,
  } = props;

  return (
    <a key={key} id={`user-${key}`} href={link}>
      <div className="leftArea">
        <img alt="test" src={image} />
      </div>
      <div className="rightcontent">
        <h6>{name}</h6>
        {description && <p>{description}</p>}
      </div>
    </a>
  );
};

Card.propTypes = {
  key: PropTypes.number.isRequired,
  name: PropTypes.string,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  name: 'No name',
  image: null,
  description: null,
};

export default Card;
