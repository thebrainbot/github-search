import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
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
    maxWidth: '100px',
    maxHeight: '100%',
  },
  leftArea: {
    width: '30%',
  },
  rightArea: {
    width: '70%',
  },
  link: {
    display: 'flex',
    width: '100%',
  },
  name: {
    lineHeight: '1.75rem',
    marginBottom: '1rem',
  },
  body: {
    lineBeight: '1.25rem',
    paddingBottom: '.25rem',
  },
}));

const Card = (props) => {
  const classes = useStyles();
  const {
    id,
    name,
    image,
    description,
    link,
    company,
    login,
    starredRepositories: { totalCount: starredCount },
    commitComments: { totalCount: commitCount },
  } = props;

  const displayName = name || login;
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
            <Typography className={classes.name} variant="h4">
              {displayName}
            </Typography>
            { company && (
            <Typography className={classes.body} variant="body1">
              Company:
              {' '}
              {company}
            </Typography>
            )}
            { description
              && (
              <Typography className={classes.body} variant="body1">
                {description}
              </Typography>
              )}

            <Typography className={classes.body} variant="body1">
              Starred Repos:
              {' '}
              {starredCount}
            </Typography>
            <Typography className={classes.body} variant="body1">
              Commit Comments:
              {' '}
              {commitCount}
            </Typography>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  login: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  company: PropTypes.string,
  starredRepositories: PropTypes.shape({
    totalCount: PropTypes.number,
  }),
  commitComments: PropTypes.shape({
    totalCount: PropTypes.number,
  }),
};

Card.defaultProps = {
  name: 'No name',
  image: null,
  description: 'No description',
  company: null,
  login: null,
  starredRepositories: { totalCount: 0 },
  commitComments: { totalCount: 0 },

};

export default Card;
