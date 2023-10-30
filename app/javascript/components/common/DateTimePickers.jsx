import React from 'react';
import withStyles from '@mui/styles/withStyles';
import Grid from '@mui/material/Grid';
import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import Typography from '@mui/material/Typography';
import { DATE_TIME_FORMAT } from './Constants';

const styles = theme => ({
    dateTimeTextfield: {
      textAlign: 'right',
      padding: '8px 16px',
    },
    formQuestionTitle: {
      textAlign: 'right',
      padding: '16px 16px',
    },
    formRow: {
      padding: '8px 0px',
    },
});

const DateTimePickers = (props) => {
    const {
        classes, setTime, time,
    } = props;
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Grid
                container
                className={classes.formRow}
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid item sm={3}>
                    <Typography variant="h4" className={classes.formQuestionTitle}>Buy date</Typography>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <DatePicker
                        label="MM/DD/YYYY"
                        variant="outlined"
                        value={time.buy}
                        format={DATE_TIME_FORMAT}
                        onChange={date => setTime(moment(date), 'buyDate')}
                    />
                </Grid>
                <Grid item sm={1}>
                    <Typography variant="h4" className={classes.formQuestionTitle}>Expr date</Typography>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <DatePicker
                        label="MM/DD/YYYY"
                        variant="outlined"
                        value={time.expr}
                        format={DATE_TIME_FORMAT}
                        onChange={date => setTime(moment(date), 'exprDate')}
                    />
                </Grid>
            </Grid>
        </LocalizationProvider>
    )
}

export default withStyles(styles)(DateTimePickers);
