import React from 'react';
import PropTypes from 'prop-types';
import { SnackbarProvider } from 'notistack';
import withStyles from '@mui/styles/withStyles';
import ErrorIcon from '@mui/icons-material/Error';

const styles = theme => ({
  root: {
    marginTop: '64px',
  },
  icon: {
    marginRight: '8px',
    fontSize: '1.25rem',
  },
});

const SnackbarContainer = ({ classes, maxSnack, ...rest }) => (
  <SnackbarProvider
    maxSnack={maxSnack}
    iconVariant={{
      error: <ErrorIcon className={classes.icon} />,
    }}
    classes={{ root: classes.root }}
    {...rest}
  />
);

SnackbarContainer.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  maxSnack: PropTypes.number,
};

SnackbarContainer.defaultProps = {
  maxSnack: 3,
};

export default withStyles(styles)(SnackbarContainer);
