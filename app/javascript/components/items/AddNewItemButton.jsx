import React from "react";
import Button from '@mui/material/Button';

const AddNewItemButton = (props) => {
    const { handleNewItemClick } = props;

    return (
        <Button
                key="new_closet"
                onClick={handleNewItemClick}
            >
                Add new item
        </Button>
    )
};

export default AddNewItemButton;
