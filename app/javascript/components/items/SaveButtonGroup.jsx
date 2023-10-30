import React from "react";
import withStyles from '@mui/styles/withStyles';
import axios from 'axios';
import _isEmpty from 'lodash/isEmpty';
import Grid from '@mui/material/Grid';
import ActionButton from "../common/ActionButton";
import AxiosHeaders from "../../helpers/AxiosHeaders";

const styles = theme => ({
});

const SaveButtonGroup = (props) => {
    const { classes, itemData, errors, setAttemptedSubmission } = props;

    const {
        name,
        buyDate,
        exprDate,
        location,
        amount,
        image,
        price,
    } = itemData;

    const {closetId, itemId }= window.gon.itemInfo;
    const isValid = _isEmpty(errors);
    const buildFormData = () => {
        const submitData = new FormData();
        submitData.append('item[name]', name);
        submitData.append('item[amount]', amount);
        submitData.append('item[closet_id]', closetId);
        if (buyDate) {
            submitData.append('item[buy_date]', buyDate.toISOString());
        }
        if(exprDate) {
            submitData.append('item[expr_date]', exprDate.toISOString());
        }
        if(price) {
            submitData.append('item[price]', price);
        }
        if(location) {
            submitData.append('item[location]', location);
        }
        if(image) {
            submitData.append('item[image]', image);
        }
        return submitData;
    }

    const submiting = (data) => {
        const url = (itemId
            ? `/items/${itemId}`
            : '/items'
        );
        const method = itemId ? 'PUT' : 'POST';

        axios({
            url,
            method,
            headers: Object.assign({ 'Content-Type': 'multipart/form-data' }, AxiosHeaders),
            data,
          }).then((res) => {
            const redirectPath = `/closets/${res.data.closet_id}`
            window.location.href = redirectPath;
          }).catch(({ response }) => {
            response.data.errors.forEach((d) => {
                console.log(d);
            });
          });
    }

    const saveItemHandler = () => {
        setAttemptedSubmission(true);
        if (isValid) {
          const formData = buildFormData();
          submiting(formData);
        }
      };
    return (
        <Grid
            spacing={2}
            container
            justifyContent="flex-end"
            alignItems="center"
        >
            <ActionButton
                text="Save Item"
                onClick={saveItemHandler}
            />
        </Grid>
    )
};

export default withStyles(styles)(SaveButtonGroup);
