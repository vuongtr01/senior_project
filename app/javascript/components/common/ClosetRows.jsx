import React, { useState } from 'react';
import withStyles from '@mui/styles/withStyles';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import ClosetAutoComplete from './ClosetAutoComplete';

const styles = theme => ({
  textField: {
    width: '100%',
    padding: '0px 16px',
  },
  formRow: {
    padding: '8px 0px',
  },
  formQuestionTitle: {
    textAlign: 'right',
    padding: '12px 16px',
  },
});

const ClosetRow = (props) => {
  const {
    classes,setValue, value,
  } = props;
  return (
    <Grid
      container
      className={classes.formRow}
      justifyContent="flex-start"
    >
      <Grid item sm={3}>
        <Typography variant="h4" className={classes.formQuestionTitle}>Closet</Typography>
      </Grid>
      <Grid item sm={7} xs={12} align="left">
        <ClosetAutoComplete
          value={value}
          setValue={setValue}
        />
      </Grid>
    </Grid>
  );
};

ClosetRow.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Object),
};

ClosetRow.defaultProps = {
  value: null,
};

export default withStyles(styles)(ClosetRow);
