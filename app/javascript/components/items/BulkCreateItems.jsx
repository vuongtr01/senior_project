import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import moment from "moment";
import Divider from '@mui/material/Divider';
import withStyles from '@mui/styles/withStyles';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SaveButtonGroup from "./SaveButtonGroup";
import ItemForm from "./ItemForm";

const styles = theme => ({
    connector: {
        width: 0,
        height: '64px',
      },
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

const BulkCreateItems = (props) => {
    const { classes, formTitle, setValue } = props;
    const { itemInfo } = window.gon;
    const {
        name,
        buy_date: buyDate,
        expr_date:exprDate,
        amount,
        location,
        price,
        image,
        closet
    } = itemInfo
    
    const [itemsData, setItemsData] = useState([{
        id: `item-${Math.random()}`,
        name: name || '',
        buyDate: buyDate ? moment(buyDate) : null,
        exprDate: exprDate ? moment(exprDate) : null,
        amount: amount || 0,
        location: location || '',
        image: image || '',
        price: price || '',
        closet: closet || null,
      }]);

    const handleAddSlot = () => {
        const newSlot = {
            id: `item-${Math.random()}`,
            name: '',
            buyDate: null,
            exprDate: null,
            amount: 0,
            location: '',
            image:'',
            price: '',
            closet: closet || null,
        };

        setItemsData([...itemsData, newSlot]);
    }

    const handleDeleteSlot = (id) => {
        const newItemsData = itemsData.filter(it => it.id != id);
        setItemsData(newItemsData);
    }

    const handleItemDataChange = (id, value, field) => {
        const updatedItemsData = itemsData.map((it) => {
            if (it.id === id) {
              return { ...it, [field]: value };
            }
            return it;
          });
          setItemsData(updatedItemsData);
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
                        <Grid container className={classes.title} alignContent='center'>
                            <Grid item xs={10}>
                                <Typography variant="h1" className={classes.labelTitle}>
                                    {formTitle}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <SaveButtonGroup
                                    errors={{}}
                                    itemData={itemsData}
                                />
                            </Grid>
                        </Grid>
                        <Divider variant="middle" className={classes.divider} />
                        {itemsData.map((it, index) => (
                            <ItemForm
                                key={it.id}
                                index={index}
                                data={it}
                                setData={handleItemDataChange}
                                deleteData={handleDeleteSlot}
                            />
                        ))}
                        <Grid
                            item
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Grid item>
                                <IconButton className={classes.addBtn} onClick={handleAddSlot} size="large">
                                    <AddCircleOutlineOutlinedIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default withStyles(styles)(BulkCreateItems);
