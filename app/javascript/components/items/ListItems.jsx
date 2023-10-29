import React, { useState } from "react";
import ItemCard from "./ItemCard";
import withStyles from '@mui/styles/withStyles';
import Grid from '@mui/material/Grid';

const styles = theme => ({
    container: {
        width: '100%',
        marginTop: '32px !important',
        paddingLeft: '16px !important',
        paddingRight: '16px !important',
    },
    item: {
        width: '100%',
    }
});

const ListItems = (props) => {
    const { classes } = props;
    const [items, setItems] = useState(window.gon.closetInfo.items);
    const deleteItem = (it) => {
        const newItemsList = items.filter(i => i.id != it.id);
        setItems(newItemsList);
    }

    console.log(items);

    return (
        <Grid
            container
            direction="column"
            spacing={2}
            className={classes.container}
        >
            {items.map((it) => (
                <Grid item className={classes.item} key={it.id}>
                    <ItemCard
                        deleteItem={deleteItem}
                        item={it}
                    />
                </Grid>
            ))}
        </Grid>
    )
} 

export default withStyles(styles)(ListItems);
