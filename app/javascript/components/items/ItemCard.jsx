import * as React from 'react';
import axios from 'axios';
import moment from 'moment';
import IconButton from '@mui/material/IconButton';
import withStyles from '@mui/styles/withStyles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { SECONDARY_DARK_BLUE_COLOR } from '../common/Constants';
import AxiosHeaders from '../../helpers/AxiosHeaders';
import { DATE_TIME_FORMAT } from '../common/Constants';

const style = theme => ({
    image: {
        margin: 'auto',
        display: 'block',
        maxWidth: '80%',
        maxHeight: '80%',
    },
    container: {
        width: '100%',
        marginBottom: '16px',
    },
    optionalButton: { marginLeft: '8px' },
    deleteIcon: {
        color: '#e82e2e',
        '&:hover': { color: '#e82e2e' },
    },
    editIcon: {
        color: SECONDARY_DARK_BLUE_COLOR,
        '&:hover': { color: SECONDARY_DARK_BLUE_COLOR },
    }
})

const ItemCard = (props) => {
    const { classes, item, deleteItem } = props;
    const {
        name,
        amount,
        buy_date: buyDate,
        expr_date: exprDate,
        price,
        location,
    } = item;

    const { closetId } = window.gon.closetInfo;

    const handleDeleteItem = () => {
        const url = `/items/${item.id}`;
        const method = 'DELETE';
        const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
        axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

        axios({
            url,
            method,
          }).then((res) => {
            deleteItem(item);
          }).catch(({ response }) => {
            response.data.errors.forEach((d) => {
              console.log(d);
            });
          });
    }
    const handleEditItem = () => {
        const url = `/closets/${closetId}/items/${item.id}/edit`
        window.location.href = url;
    }
    return (
        <Paper
            className={classes.container}
        >
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ButtonBase>
                        <img className={classes.image} alt="complex" src="https://www.google.com/url?sa=i&url=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEN0IQhnN-J3JIFmo--6e22lk6pF6LOn1b4Q&usqp=CAUhttps%3A%2F%2Fwww.mapbox.com%2Fblog%2Fecommerce-or-brick-mortar&psig=AOvVaw3Ou5Eenuv-ClDk8Maec3BA&ust=1698416491826000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIje89T0k4IDFQAAAAAdAAAAABAD" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h1" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Amount: {amount}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Price: {price ? `$${price}` : "N/a"}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Buy Date: {buyDate ? moment(buyDate).format(DATE_TIME_FORMAT) : "N/a"}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Expired Date:  { exprDate ? moment(exprDate).format(DATE_TIME_FORMAT): "N/a"}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                               Location:  { location ? location : "N/a"}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction="column" alignItems="flex-end">
                        <Grid item>
                            <IconButton
                                size="small"
                                tabIndex={-1}
                                className={classes.optionalButton}
                                onClick={handleDeleteItem}
                            >
                                <DeleteIcon fontSize='medium' className={classes.deleteIcon} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                size="small"
                                tabIndex={-1}
                                className={classes.optionalButton}
                                onClick={handleEditItem}
                            >
                                <ModeEditOutlineIcon fontSize='medium' className={classes.editIcon}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default withStyles(style)(ItemCard);
