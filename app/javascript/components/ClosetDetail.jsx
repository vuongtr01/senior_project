import React, { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import StandardTheme from "./common/StandardTheme";
import NavBar from "./common/NavBar";
import AddNewItemButton from "./items/AddNewItemButton";
import ListItems from "./items/ListItems";

const ClosetsIndex = () => {
    const handleNewItemClick = () => {
        console.log("click");
    };

    const actionButtons = () => {
        return (
            <AddNewItemButton
                handleNewClosetClick={handleNewItemClick}
            >
                Add new item
            </AddNewItemButton>
        )
    }
    return (
        <ThemeProvider theme={StandardTheme}>
            <NavBar
                actionButton={actionButtons}
            />
            <ListItems />
        </ThemeProvider>
    );
};

export default ClosetsIndex;
