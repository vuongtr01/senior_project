import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import withStyles from '@mui/styles/withStyles';
import { SECONDARY_LIGHT_BLUE_COLOR, SECONDARY_DARK_BLUE_COLOR } from './Constants';

const styles = () => ({
  root: {
    backgroundColor: '#68a6de',
    color: '#fff',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: SECONDARY_DARK_BLUE_COLOR,
    },
    textTransform: 'none',
    fontSize: '0.9375rem',
    width: '100%',
    whiteSpace: 'nowrap',
  },
});

const ActionButton = forwardRef((props, ref) => {
  const {
    classes,
    text,
    isValid,
    ...rest
  } = props;

  return (
    <Button
      {...rest}
      variant="contained"
      color="secondary"
      className={classes.root}
      disableElevation
      ref={ref}
      disabled={!isValid}
    >
      {text}
    </Button>
  );
});

ActionButton.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  isValid: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

ActionButton.defaultProps = {
  isValid: true,
};

export default withStyles(styles)(ActionButton);
