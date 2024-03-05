import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import withStyles from '@mui/styles/withStyles';

const styles = () => ({
  icon: {
    fontSize: '0.75rem',
  },
});

function SnackbarCloseButton(props) {
  const { classes, snackKey } = props;
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton color="inherit" onClick={() => closeSnackbar(snackKey)}>
      <CloseOutlinedIcon className={classes.icon} />
    </IconButton>
  );
}

SnackbarCloseButton.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  snackKey: PropTypes.number,
};

SnackbarCloseButton.defaultProps = {
  snackKey: null,
};

export default withStyles(styles)(SnackbarCloseButton);
