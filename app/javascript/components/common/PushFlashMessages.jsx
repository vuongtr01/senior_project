import React from 'react';
import Link from '@mui/material/Link';
import Parser from 'html-react-parser';

export default (enqueuer, anchor) => {
  const { flashMessages } = window;
  const anchorOrigin = anchor || { vertical: 'top', horizontal: 'center' };
  Object.keys(flashMessages || []).map((key) => {
    const variant = key === 'recaptcha_error' ? 'error' : key;
    const message = flashMessages[key];
    let action = null;
    if (!message) { return null; }
    if (message === 'Email has already been taken') {
      action = (
        <Link
          href="/recruiter/password/new"
          target="_blank"
          color="primary"
        >
          Forgot your password?
        </Link>
      );
    }
    const hideDuration = variant === 'error' ? 7000 : 5000;
    window.flashMessages[key] = '';
    return enqueuer(
      Parser(message),
      {
        variant,
        autoHideDuration: hideDuration,
        preventDuplicate: true,
        anchorOrigin,
        action,
      },
    );
  });
};
