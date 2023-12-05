import React from "react";
import Button from '@mui/material/Button';

const AllItemButton = (props) => {
    const { handleAllItemClick } = props;

    return (
        <Button variant="contained" style={{maxWidth: '100%', maxHeight: '50px', minWidth: '75%', minHeight: '50px'}}
                key="all_items"
                onClick={handleAllItemClick}
            >
                VIEW ALL ITEMS
        </Button>
    )
};

export default AllItemButton;