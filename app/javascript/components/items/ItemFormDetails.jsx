import React, { useState, useEffect } from "react";
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import moment from "moment";
import Divider from '@mui/material/Divider';
import withStyles from '@mui/styles/withStyles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextFieldRow from "../common/TextFieldRow";
import DateTimePickers from "../common/DateTimePickers";
import ItemAmountRow from "./ItemAmountRow";
import SaveButtonGroup from "./SaveButtonGroup";
import { YupError, YupErrorMessage } from "../common/YupErrorProcessing";

const styles = theme => ({
    gridContainer: {
      padding: '32px',
      overflow: 'auto',
      flexGrow: 1,
    },
    gridItem: {
      marginBottom: '25px',
    },
    imageField: {
      marginTop: '25px',
    },
    labelTitle: {
        lineHeight: '1.1',
        display: 'block',
        width: '100%',
        textAlign: 'left',
    },
    divider: {
        margin: '0 16px 16px 16px',
    },
    title: {
        padding: '8px 16px',
    }
});

const ItemFormDetails = (props) => {
    const { classes, formTitle, setValue } = props;
    const itemInfo = window.gon;
    const [errors, setErrors] = useState({});
    const [attemptedSubmission, setAttemptedSubmission] = useState(false);
    const nameError = (
        YupError(errors, 'itemData.name')
          && attemptedSubmission
    );
    
    const [itemData, setItemData] = useState({
        name: itemInfo.name || '',
        buyDate: itemInfo.buyDate ? moment(itemInfo.buyDate) : null,
        exprDate: itemInfo.exprDate ? moment(itemInfo.exprDate) : null,
        amount: itemInfo.amount || 0,
        location: itemInfo.location || '',
        image: itemInfo.image || null,
        price: itemInfo.price || null,
      });
    
    const validationSchemaPublish = Yup.object({
        itemData: Yup.object({
          name: Yup.string().required('Enter item name'),
        }),
    });

    const validateSubmission = async () => {
        await validationSchemaPublish.validate(
          { itemData }, { abortEarly: false },
        ).catch((err) => {
          const updatedErrors = err.inner.reduce((obj, item) => ({
            ...obj,
            [item.path]: [...(obj[item.path] || []), ...item.errors],
          }), {});
          setErrors(updatedErrors);
        });
    };

    useEffect(() => {
        setErrors({});
        validateSubmission();
    }, [itemData]);

    const handleItemDataChange = (value, field) => {
        setItemData(
            prevState => ({
                ...prevState,
                [field]: value,
            }),
        );
    };
    return (
        <Box p={3}>
            <Grid
                className={classes.gridContainer}
                container
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={10} className={classes.gridItem}>
                    <Paper>
                        <Grid container className={classes.title}>
                            <Grid item xs={9}>
                                <Typography variant="h1" className={classes.labelTitle}>
                                    {formTitle}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <SaveButtonGroup
                                    errors={errors}
                                    itemData={itemData}
                                    setAttemptedSubmission={setAttemptedSubmission}
                                />
                            </Grid>
                        </Grid>
                        <Divider variant="middle" className={classes.divider} />
                        <Grid direction="column" container className={classes.details}>
                            <TextFieldRow
                                placeholder="Give it a succint name"
                                value={itemData.name}
                                questionTitle="Item Name"
                                inputProps={{
                                maxLength: 70,
                                }}
                                setValue={value => handleItemDataChange(value, 'name')}
                                error={nameError}
                                helperText={nameError && YupErrorMessage(errors, 'itemData.name')}
                            />
                            <DateTimePickers
                                time={{ buy: itemData.buyDate, expr: itemData.exprDate }}
                                setTime={(date, type) => handleItemDataChange(date, type)}
                            />
                            <TextFieldRow
                                placeholder="Where is it now!!"
                                value={itemData.name}
                                questionTitle="Location"
                                inputProps={{
                                maxLength: 70,
                                }}
                                setValue={value => handleItemDataChange(value, 'location')}
                            />
                            <TextFieldRow
                                placeholder="How much does it cost"
                                value={itemData.name}
                                questionTitle="Item Price"
                                inputProps={{
                                maxLength: 70,
                                }}
                                setValue={value => handleItemDataChange(value, 'price')}
                            />
                            <ItemAmountRow
                                counter={itemData.amount}
                                setCounter={newValue => handleItemDataChange(newValue, 'amount')}
                            />
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default withStyles(styles)(ItemFormDetails);
