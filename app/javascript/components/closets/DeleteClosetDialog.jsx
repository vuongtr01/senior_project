import React, { useState } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AxiosHeaders from "../../helpers/AxiosHeaders";

const DeleteClosetDialog = (props) => {
    const { openDialog, setOpenDialog, closetId, setClosets } = props;
    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleDeleteCloset = () => {
        const url = `/closets/${closetId}`;
        const method = 'DELETE';
        const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
        axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
        axios({
            url,
            method,
        }).then((res) => {
            setClosets(res.data.closets);
            setOpenDialog(false);
        }).catch(({ response }) => {
            response.data.errors.forEach((d) => {
              console.log(d);
            });
        });
    }

    return (
        <Dialog open={openDialog} onClose={handleClose}>
            <DialogTitle>Delete Closet Confirmation</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    If you delete a closet, all items in it are also deleted
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleDeleteCloset}>Delete Closet</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteClosetDialog;
