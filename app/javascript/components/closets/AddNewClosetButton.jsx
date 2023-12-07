import React from "react";
import Button from '@mui/material/Button';

const AddNewClosetButton = (props) => {
    const { handleNewClosetClick } = props;

    return (
        <Button variant="contained" style={{maxWidth: '100%', maxHeight: '50px', minWidth: '75%', minHeight: '50px'}}
                key="new_closet"
                onClick={handleNewClosetClick}
            >
                ADD NEW CLOSET
        </Button>
    )
};

export default AddNewClosetButton;

