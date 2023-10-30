import React from "react";
import Button from '@mui/material/Button';

const AddNewClosetButton = (props) => {
    const { handleNewClosetClick } = props;

    return (
        <Button
                key="new_closet"
                onClick={handleNewClosetClick}
            >
                Add new closet
        </Button>
    )
};

export default AddNewClosetButton;

