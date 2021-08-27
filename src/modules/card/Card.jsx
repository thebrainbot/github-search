import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 400,
    display: 'flex',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '50px',
    maxHeight: '100%',
  },
  leftArea: {
    width: '30%',
  },
  rightArea: {
    width: '70%',
  },
  title: {
    lineHeight: 1.1,
    marginBottom: 10,
  },
  link: {
    display: 'flex',
    width: '100%',
  },
}));

const Card = (props) => {
  const classes = useStyles();
  const {
    id, name, image, description, link,
  } = props;

  const onPress = () => {
    window.location.href = link;
  };

  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      md={4}
      justifyContent="space-around"
      alignItems="stretch"
    >
      <Paper elevation={3} className={classes.paper}>
        <div id={`user-${id}`} className={classes.link} onClick={onPress} onKeyPress={onPress} role="link" tabIndex={0}>
          <div className={classes.leftArea}>
            <img alt="test" src={image} className={classes.img} />
          </div>
          <div className={classes.rightArea}>
            <h6>{name}</h6>
            <p>{description}</p>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  name: 'No name',
  image: null,
  description: 'No description',
};

export default Card;
