import _isEmpty from 'lodash/isEmpty';

export const YupError = (errors, field) => !_isEmpty(errors[field]);
export const YupErrorMessage = (errors, field) => (
  YupError(errors, field) ? errors[field].join(' ') : ''
);