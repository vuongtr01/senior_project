import React from "react";
import Button from '@mui/material/Button';

const AllItemButton = (props) => {
    const { handleAllItemClick } = props;

    return (
        <Button
                key="all_items"
                onClick={handleAllItemClick}
            >
                All Items
        </Button>
    )
};

export default AllItemButton;