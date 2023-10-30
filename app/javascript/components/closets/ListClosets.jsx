import React, { useEffect, useState } from "react";
import axios from 'axios';
import Grid from '@mui/material/Grid';
import withStyles from '@mui/styles/withStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import WarningButton from "../common/WarningButton";
import ActionButton from "../common/ActionButton";
import DeleteClosetDialog from "./DeleteClosetDialog";

const styles = theme => ({
    actionButton: {
        padding: '0px 8px',
    },
    container: {
        padding: '16px 8px',
    },
});

const ListCloset = (props) => {
    const { classes } = props;
    const [closets, setClosets] = useState([]);
    const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false);
    const [deletingClosetId, setDeletingClosetId] = useState(null);
    const fetchClosets = async() => {
        const { data } = await axios({
            url: `/closets`,
            headers: { 'Accept': 'application/json' }
          });
        setClosets(data);
    }

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
      ];

    const handleDeleteCloset = (closetId) => {
        console.log(closetId);
        setDeletingClosetId(closetId);
        setOpenConfirmDeleteDialog(true);
    }

    const handleClosetDetailClick = (closetId) => {
        const redirectPath = `/closets/${closetId}`;
        window.location.href = redirectPath;
    }

    useEffect(() => {
        fetchClosets();
      }, []);
    return (
        <>
            <Grid className={classes.container} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {closets.map((d) => (
                    <Grid key={d.id} item xs={12} md={3}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <ImageList cols={1} rowHeight={164}>
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                        <img
                                            srcSet={`${item.img}?w=164&h=105&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.img}?w=164&h=105&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                            href = {`/id/closets/${item.title}`}
                                        />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                                <Typography variant="h5" component="div" align="center">
                                    {d.category}
                                </Typography>
                                <Typography variant="body2" align="center">
                                    {d.count_items} Items
                                </Typography>
                                <Grid container justifyContent='center' alignItems='center'>
                                    <Grid item className={classes.actionButton}>
                                        <WarningButton
                                            size="small"
                                            text="Delete"
                                            onClick={() => handleDeleteCloset(d.id)}   
                                        />
                                    </Grid>
                                    <Grid item className={classes.actionButton}>
                                        <ActionButton
                                            size="small"
                                            text="Detail"
                                            onClick={() => handleClosetDetailClick(d.id)}
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <DeleteClosetDialog
                openDialog={openConfirmDeleteDialog}
                setOpenDialog={setOpenConfirmDeleteDialog}
                closetId={deletingClosetId}
                setClosets={setClosets}
            />
        </>
    );
};

export default withStyles(styles)(ListCloset);
