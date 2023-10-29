import React, { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import ListCloset from "./closets/ListClosets";
import NavBar from "./common/NavBar";
import AddNewClosetButton from "./closets/AddNewClosetButton";
import AddNewClosetDialog from "./closets/AddNewClosetDialog";
import StandardTheme from "./common/StandardTheme";


const ClosetsIndex = () => {
    const [openAddClosetDialog, setOpenAddClosetDialog] = useState(false);
    
    const handleNewClosetClick = () => {
        setOpenAddClosetDialog(true);
    };

    const actionButtons = () => {
        return (
            <AddNewClosetButton
                handleNewClosetClick={handleNewClosetClick}
            >
                Add new closet
            </AddNewClosetButton>
        )
    }
    return (
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
    );
};

export default ClosetsIndex;
