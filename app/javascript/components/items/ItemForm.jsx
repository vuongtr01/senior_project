import React from "react";
import withStyles from '@mui/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextFieldRow from "../common/TextFieldRow";
import ClosetRows from "../common/ClosetRows";
import DateTimePickers from "../common/DateTimePickers";
import ItemAmountRow from "./ItemAmountRow";
import AddNewFileButton from "./AddNewFileButton";

const styles = theme => ({
    container: {
      padding: theme.spacing(1),
    },
    main: {
      margin: theme.spacing(1),
    },
    connector: {
      width: 0,
      height: '64px',
    },
    heading: {
      backgroundColor: '#337AB7',
      color: 'white',
      padding: '12px',
    },
    wrapIcon: {
      color: 'white',
      padding: '8px',
    },
    iconDelete: {
      color: 'white',
    }
});

const ItemForm = props => {
  const {
      classes, index, data, setData, deleteData, isNewItem,
    } = props;
    const {
      id, name, buyDate, exprDate,
      amount, location, price,
      closet,
    } = data;
    const handleChange = (field, value) => setData(id, field, value);
  
  const isFirstRow = index === 0;
  return (
    <Grid direction="column" container className={classes.details} justifyContent="center" alignItems="center">
      <Grid item className={classes.heading} container justifyContent="flex-start" alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h3" className={classes.wrapIcon}>
            {` Item ${index + 1}`}
          </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          {!isFirstRow && (
            <IconButton
              className={classes.deleteBtn}
              onClick={() => deleteData(id)}
            >
              <DeleteOutlineIcon className={classes.iconDelete} />
            </IconButton>
          )}
        </Grid>
      </Grid>
      <TextFieldRow
        placeholder="Item Name"
        value={name}
        questionTitle="Item Name"
        inputProps={{
        maxLength: 70,
        }}
        setValue={value => handleChange(value, 'name')}
      />
      <ClosetRows
          value={closet}
          setValue={value => handleChange(value, 'closet')}
          disable={isNewItem}
      />
      <DateTimePickers
          time={{ buy: buyDate, expr: exprDate }}
          setTime={(date, type) => handleChange(date, type)}
      />
      <TextFieldRow
          placeholder="Where is it now?"
          value={location}
          questionTitle="Location"
          inputProps={{
          maxLength: 70,
          }}
          setValue={value => handleChange(value, 'location')}
      />
      <TextFieldRow
          placeholder="How much did it cost?"
          value={price}
          questionTitle="Item Price"
          inputProps={{
          maxLength: 70,
          }}
          style={{width: "80%"}}
          setValue={value => handleChange(value, 'price')}
      />
      <ItemAmountRow
          counter={amount}
          setCounter={newValue => handleChange(newValue, 'amount')}
      />
      <AddNewFileButton />
      <Grid item>
          <Paper square variant="outlined" className={classes.connector} />
      </Grid>
    </Grid>
  )
}

ItemForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
  isNewItem: PropTypes.bool,
};

ItemForm.defaultProps = {
    isNewItem: false,
  };

export default withStyles(styles)(ItemForm);
