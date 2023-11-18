import React, { useState } from "react";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import ListCloset from "./closets/ListClosets";
import NavBar from "./common/NavBar";
import Grid from '@mui/material/Grid';
import AddNewClosetButton from "./closets/AddNewClosetButton";
import AllItemButton from "./common/AllItemButton";
import AddNewClosetDialog from "./closets/AddNewClosetDialog";
import StandardTheme from "./common/StandardTheme";


const ClosetsIndex = () => {
    const [openAddClosetDialog, setOpenAddClosetDialog] = useState(false);
    
    const handleNewClosetClick = () => {
        setOpenAddClosetDialog(true);
    };

    const handleAllItemClick = () => {
        window.location.href = '/items';
    }

    const actionButtons = () => {
        return (
            <Grid container>
                <Grid item xs={6}>
                    <AddNewClosetButton
                        handleNewClosetClick={handleNewClosetClick}
                    />
                </Grid>
                <Grid item xs={6}>
                    <AllItemButton
                        handleAllItemClick={handleAllItemClick}
                    />
                </Grid>
            </Grid>
        )
    }
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={StandardTheme}>
                <NavBar
                    actionButton={actionButtons}
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
