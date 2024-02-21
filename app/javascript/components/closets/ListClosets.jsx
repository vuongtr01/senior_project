import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from 'react-router';
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
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grow from '@mui/material/Grow';
import AllItemButton from '../common/AllItemButton';
import AddNewClosetButton from "./AddNewClosetButton";
import AddNewClosetDialog from "./AddNewClosetDialog";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const defaultTheme = createTheme();

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
    const [openAddClosetDialog, setOpenAddClosetDialog] = useState(false);
    const [deletingCloset, setDeletingCloset] = useState(null);
    const location = useLocation();
    const fetchClosets = async() => {
        const { data } = await axios({
            url:[location.pathname, location.search].join(''),
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

    const handleAllItemClick = () => {
        window.location.href = '/items';
    }

    const handleNewClosetClick = () => {
      setOpenAddClosetDialog(true);
  };

    const handleDeleteCloset = (closet) => {
        setDeletingCloset(closet);
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
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <>
            {/* Hero unit */}
            <Box
              sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm" align = "center">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  My Closets
                </Typography>
                <Typography
                  component="h5"
                  variant="h6"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  or...
                </Typography>
                {/* <Button variant="contained" style={{maxWidth: '100%', maxHeight: '50px', minWidth: '75%', minHeight: '50px'}}>View Full Inventory</Button> */}
                <AllItemButton
                  handleAllItemClick={handleAllItemClick}
                />
              </Container>
            </Box>
            <Container sx={{ py: 5, bgcolor: 'background.paper' }} maxWidth="false">
              {/* End hero unit */}
                {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}> */}
                <Grid container direction="column" justifyContent="center" alignItems="center">
                  <Grid item container justifyContent="center" className={classes.container} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {closets.map((d) => (
                      <Grid key={d.id} item xs={12} md={3}>
                        <Card
                          key={d.id}
                        >
                          <CardMedia
                            component="div"
                            sx={{
                              // 16:9
                              pt: '56.25%',
                            }}
                            image="https://source.unsplash.com/random?wallpapers"
                          />
                          <CardContent sx={{ flexGrow: 1}}>
                            <Typography gutterBottom variant="h5" component="div" align="center">
                              {d.category}
                            </Typography>
                            <Typography variant = "h6" align="center" marginBottom="10px">
                              {d.count_items} Items
                            </Typography>
                            <Grid container justifyContent='center' alignItems='center'>
                                      <Grid item className={classes.actionButton}>
                                          <WarningButton
                                              size="small"
                                              text="Delete"
                                              onClick={() => handleDeleteCloset(d)}   
                                          />
                                      </Grid>
                                      <Grid item className={classes.actionButton}>
                                          <ActionButton
                                              size="small"
                                              text="Details"
                                              onClick={() => handleClosetDetailClick(d.id)}
                                          />
                                      </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item>
                    <AddNewClosetButton
                        handleNewClosetClick={handleNewClosetClick}
                    />
                  </Grid>
                  <Grid item>
                    {/* Footer */}
                    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                      <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                      >
                        Project LifeList
                      </Typography>
                    </Box>
                    {/* End footer */}
                  </Grid>
                </Grid>
                <AddNewClosetDialog
                  openDialog={openAddClosetDialog}
                  setOpenDialog={setOpenAddClosetDialog}
                  />
                <DeleteClosetDialog
                  openDialog={openConfirmDeleteDialog}
                  setOpenDialog={setOpenConfirmDeleteDialog}
                  deletingCloset={deletingCloset}
                  setClosets={setClosets}
                />
            </Container>
          </>
        </ThemeProvider>
      );
};

export default withStyles(styles)(ListCloset);