import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const PaginationButton = (props) => {
  const { action, label, isDisabled } = props;

  return (
    <div>
      {isDisabled
        ? (
          <Button disabled onClick={action}>{label}</Button>
        )
        : (<Button onClick={action}>{label}</Button>)}
    </div>
  );
};

PaginationButton.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

PaginationButton.defaultProps = {
  isDisabled: true,
};

export default PaginationButton;
