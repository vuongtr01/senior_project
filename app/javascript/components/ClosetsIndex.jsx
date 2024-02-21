import React, { useState, useEffect } from "react";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { enqueueSnackbar } from 'notistack';
import ListCloset from "./closets/ListClosets";
import NavBar from "./common/NavBar";
import Grid from '@mui/material/Grid';
import AddNewClosetButton from "./closets/AddNewClosetButton";
import AllItemButton from "./common/AllItemButton";
import PushFlashMessages from "./common/PushFlashMessages";
import AddNewClosetDialog from "./closets/AddNewClosetDialog";
import StandardTheme from "./common/StandardTheme";


const ClosetsIndex = (props) => {
    const [openAddClosetDialog, setOpenAddClosetDialog] = useState(false);
    
    const handleNewClosetClick = () => {
        setOpenAddClosetDialog(true);
    };

    const actionButtons = () => {
        return (
            <Grid container>
                <Grid item xs={6}>
                    <AddNewClosetButton
                        handleNewClosetClick={handleNewClosetClick}
                    />
                </Grid>
            </Grid>
        )
    }
    useEffect(() => {
        PushFlashMessages(enqueueSnackbar, { vertical: 'top', horizontal: 'right' });
      }, []);
    console.log(window);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={StandardTheme}>
                <NavBar
                    // actionButton={actionButtons}
                />        
                <ListCloset />
                <AddNewClosetDialog
                    openDialog={openAddClosetDialog}
                    setOpenDialog={setOpenAddClosetDialog}
                />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default ClosetsIndex;