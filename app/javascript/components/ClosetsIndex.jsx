import React, { useState } from "react";
import ListCloset from "./closets/ListClosets";
import NavBar from "./common/NavBar";
import AddNewClosetButton from "./closets/AddNewClosetButton";
import AddNewClosetDialog from "./closets/AddNewClosetDialog";

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
        <>
            <NavBar
                actionButton={actionButtons}
            />        
            <ListCloset />
            <AddNewClosetDialog
                openDialog={openAddClosetDialog}
                setOpenDialog={setOpenAddClosetDialog}
            />
        </>
    );
};

export default ClosetsIndex;
