import React, { useState } from "react";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import StandardTheme from "./common/StandardTheme";
import NavBar from "./common/NavBar";
import AddNewItemButton from "./items/AddNewItemButton";
import ListItems from "./items/ListItems";

const ClosetsIndex = () => {
    const { closetId } = window.gon.closetInfo;
    const handleNewItemClick = () => {
        const redirectPath = `/closets/${closetId}/items/new`;
        window.location.href = redirectPath;
    };

    const actionButtons = () => {
        return (
            <AddNewItemButton
                handleNewItemClick={handleNewItemClick}
            />
        )
    }
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={StandardTheme}>
                <NavBar
                    actionButton={actionButtons}
                />
                <ListItems />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default ClosetsIndex;
