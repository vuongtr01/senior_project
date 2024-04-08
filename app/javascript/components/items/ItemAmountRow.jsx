import React from 'react';
import withStyles from '@mui/styles/withStyles';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Counter from '../common/Counter';

const styles = theme => ({
  buttonGroup: {
    paddingBottom: '16px',
    paddingLeft: '16px',
  },
  formRow: {
    padding: '8px 0px',
  },
  formQuestionTitle: {
    textAlign: 'right',
    padding: '8px 16px',
  },
});

const ItemAmountRow = (props) => {
  const {
    classes, setCounter, counter,
  } = props;
  return (
    <Grid
      container
      className={classes.formRow}
      justifyContent="flex-start"
      paddingTop="8px"
    >
      <Grid item sm={3}>
        <Typography
          variant="h4"
          className={classes.formQuestionTitle}
        >
          Item Amount
        </Typography>
      </Grid>
      <Grid item sm={3} xs={12} className={classes.buttonGroup}>
        <Counter
          counter={counter}
          setCounter={setCounter}
        />
      </Grid>
    </Grid>
  );
};

ItemAmountRow.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  setCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default withStyles(styles)(ItemAmountRow);
