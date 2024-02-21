import React from 'react';
import SnackbarCloseButton from '../helpers/SnackbarCloseButton';

export default (enqueuer, message, variant, autoHideDuration = 5000, action) => enqueuer(
  message,
  {
    variant,
    autoHideDuration,
    preventDuplicate: true,
    anchorOrigin: {
      vertical: window.innerWidth > 600 ? 'top' : 'bottom',
      horizontal: 'right',
    },
    action: action || (key => (<SnackbarCloseButton snackKey={key} />)),
  },
);