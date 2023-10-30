import React, { useState } from "react";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import NavBar from "../common/NavBar";
import ItemFormDetails from "./ItemFormDetails";
import StandardTheme from "../common/StandardTheme";

const NewItem = (props) => {
    const { classes } = props;
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={StandardTheme}>
                <NavBar />
                <ItemFormDetails formTitle={"New Item"}/>
            </ThemeProvider>
        </StyledEngineProvider>
    )
};

export default NewItem;
