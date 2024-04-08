import React from "react";
import withStyles from '@mui/styles/withStyles';
import { enqueueSnackbar } from "notistack";
import axios from 'axios';
import _isEmpty from 'lodash/isEmpty';
import { isArray } from "lodash";
import Grid from '@mui/material/Grid';
import ActionButton from "../common/ActionButton";
import PushSnackbarMessage from "../common/PushSnackbarMessage";

const styles = theme => ({
});

const SaveButtonGroup = (props) => {
    const { classes, itemData, errors } = props;
    const { id: itemId, closet }= window.gon.itemInfo;
    const isValid = _isEmpty(errors);
    const buildFormData = () => {
        const submitData = new FormData();
        if (!isArray(itemData)) {
            console.log('run item');
            const {
                name,
                buyDate,
                exprDate,
                location,
                amount,
                image,
                price,
                closet,
                imageFile
            } = itemData;
            submitData.append('item[name]', name);
            submitData.append('item[amount]', amount);
            submitData.append('item[closet_id]', closet.id);
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
            if(imageFile) {
                submitData.append('item[image]', imageFile);
            }
        } else {
            console.log('run array');
            submitData.append('closet[id]', closet.id);
            itemData.forEach((it, ind) => {
                submitData.append(`closet[items_attributes][${ind}][name]`, it.name);
                submitData.append(`closet[items_attributes][${ind}][amount]`, it.amount);
                submitData.append(`closet[items_attributes][${ind}][buy_date]`, it.buyDate);
                submitData.append(`closet[items_attributes][${ind}][expr_date]`, it.exprDate);
                submitData.append(`closet[items_attributes][${ind}][price]`, it.price);
                submitData.append(`closet[items_attributes][${ind}][location]`, it.location);
                if(it.imageFile) {
                    submitData.append(`closet[items_attributes][${ind}][image]`, it.imageFile);
                }
            })
        }
        return submitData;
    }

    const submiting = (data) => {
        const url = (itemId
            ? `/items/${itemId}`
            : `/closets/${closet.id}`
        );
        const method = 'PUT';
        const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
        axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
        axios({
            url,
            method,
            data,
          }).then((res) => {
            redirectPath = `/closets/${res.data.closet_id}`
            PushSnackbarMessage(
                enqueueSnackbar,
                'Item was saved successfully',
                'success',
            );
            window.location.href = redirectPath;
          }).catch(({ response }) => {
            response.data.errors.forEach((d) => {
                console.log(d);
            });
          });
    }

    const saveItemHandler = () => {
        if (isValid) {
            console.log(itemData);
            const formData = buildFormData();
            submiting(formData);
        }
      };
    return (
        <Grid
            container
        >
            <ActionButton
                text="Save Item"
                onClick={saveItemHandler}
            />
        </Grid>
    )
};

export default withStyles(styles)(SaveButtonGroup);
