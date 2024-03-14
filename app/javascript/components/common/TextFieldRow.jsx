import React, { useState } from 'react';
import withStyles from '@mui/styles/withStyles';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const styles = theme => ({
  textField: {
    width: '80%',
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

const TextFieldRow = (props) => {
  const {
    classes, questionTitle, setValue, value, ...rest
  } = props;

  const [internalText, setInternalText] = useState(value);
  const changesMade = (value !== internalText);
  return (
    <Grid
      container
      className={classes.formRow}
      justifyContent="flex-start"
    >
      <Grid item sm={3}>
        <Typography variant="h4" className={classes.formQuestionTitle}>{questionTitle}</Typography>
      </Grid>
      <Grid item sm={7} xs={12} align="left">
        <TextField
          {...rest}
          value={internalText}
          onBlur={() => (changesMade && setValue(internalText))}
          onChange={e => setInternalText(e.target.value)}
          className={classes.textField}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

TextFieldRow.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  questionTitle: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};

TextFieldRow.defaultProps = {
  value: '',
};

export default withStyles(styles)(TextFieldRow);
