import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import withStyles from '@mui/styles/withStyles';
import { LIGHT_RED_COLOR, DARK_RED_COLOR} from './Constants';

const styles = () => ({
  root: {
    backgroundColor: LIGHT_RED_COLOR,
    color: '#fff',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: DARK_RED_COLOR,
    },
    textTransform: 'none',
    fontSize: '0.9375rem',
    width: '100%',
    whiteSpace: 'nowrap',
  },
});

const WarningButton = forwardRef((props, ref) => {
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

WarningButton.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  isValid: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

WarningButton.defaultProps = {
  isValid: true,
};

export default withStyles(styles)(WarningButton);
