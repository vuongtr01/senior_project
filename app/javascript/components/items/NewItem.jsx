import React, { useState } from "react";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import NavBar from "../common/NavBar";
import BulkCreateItems from "./BulkCreateItems";
import StandardTheme from "../common/StandardTheme";

const NewItem = (props) => {
    const { classes } = props;
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={StandardTheme}>
                <NavBar />
                <BulkCreateItems formTitle={"New Item"}/>
            </ThemeProvider>
        </StyledEngineProvider>
    )
};

export default NewItem;
