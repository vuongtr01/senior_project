import React from 'react';
import withStyles from '@mui/styles/withStyles';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography';

const styles = {
  noHover: {
    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
};

const Counter = (props) => {
  const {
    classes, setCounter, counter, isEventPublished,
  } = props;
  return (
    <ButtonGroup
      size="large"
      disableRipple
    >
      <Button
        onClick={() => setCounter(counter - 1)}
      >
        <RemoveIcon fontSize="small" />
      </Button>
      <Button
        className={classes.noHover}
        disableFocusRipple
      >
        <Typography variant="h4">{counter}</Typography>
      </Button>
      <Button
        onClick={() => setCounter(counter + 1)}
      >
        <AddIcon fontSize="small" />
      </Button>
    </ButtonGroup>
  );
};

Counter.defaultProps = {
  isEventPublished: false,
};

Counter.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  setCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  isEventPublished: PropTypes.bool,
};

export default withStyles(styles)(Counter);
