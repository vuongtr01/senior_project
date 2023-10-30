import React, { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import NavBar from "../common/NavBar";
import ItemFormDetails from "./ItemFormDetails";
import StandardTheme from "../common/StandardTheme";

const NewItem = (props) => {
    const { classes } = props;
    return (
        <ThemeProvider theme={StandardTheme}>
            <NavBar />
            <ItemFormDetails formTitle={"New Item"}/>
        </ThemeProvider>
    )
};

export default NewItem;
