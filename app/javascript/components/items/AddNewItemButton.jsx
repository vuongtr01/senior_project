import React from "react";
import Button from '@mui/material/Button';

const AddNewItemButton = (props) => {
    const { handleNewItemClick } = props;

    return (
        <Button variant="outlined" style={{maxWidth: '100%', maxHeight: '50px', minWidth: '75%', minHeight: '50px'}}
                key="new_closet"
                onClick={handleNewItemClick}
                sx={{':hover': {
                    bgcolor: 'lightgray',
                    color: 'black',}}
                }
            >
                ADD NEW ITEM
        </Button>
    )
};

export default AddNewItemButton;
