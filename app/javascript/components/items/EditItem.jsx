import React, { useState } from "react";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import NavBar from "../common/NavBar";
import ItemFormDetails from "./ItemFormDetails";
import StandardTheme from "../common/StandardTheme";

const EditItem = (props) => {
    const { classes } = props;
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={StandardTheme}>
                <NavBar />
                <ItemFormDetails formTitle={"Edit Item"}/>
            </ThemeProvider>
        </StyledEngineProvider>
    )
};

export default EditItem;
