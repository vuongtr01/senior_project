import React, { useState } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AxiosHeaders from "../../helpers/AxiosHeaders";

const AddNewClosetDialog = (props) => {
    const { openDialog, setOpenDialog } = props;
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [value, setValue] = useState("");
    const { userId } = window.gon.user;
    const handleClose = () => {
        setError(false);
        setErrorMessage("");
        setOpenDialog(false);
    };

    const handleOnBlur = () => {
        if (value === "") {
            setError(true);
            setErrorMessage("Categories cannot be blank!!!");
        } else {
            setError(false);
            setErrorMessage("");
        }
    };

    const buildFormData = () => {
        const submitData = new FormData();
        submitData.append('closet[category]', value);
        submitData.append('closet[user_id]', userId);
        return submitData;
    };

    const submiting = (data) => {
        const url = '/closets';
        const method = 'POST';
        const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
        axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

        axios({
            url,
            method,
            data,
          }).then((res) => {
            window.location.href = `/closets/${res.data.id}`;
          }).catch(({ response }) => {
            response.data.errors.forEach((d) => {
              console.log(d);
            });
          });
    }

    const handleAddCloset = () => {
        if(!error) {
            submiting(buildFormData());
        }
    }

    return (
        <Dialog open={openDialog} onClose={handleClose}>
            <DialogTitle>Create New Closet</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Add new closet to keep track your items
                </DialogContentText>
                <TextField
                    autoFocus
                    error={error}
                    margin="dense"
                    value={value}
                    onBlur={handleOnBlur}
                    label="Closet Category"
                    fullWidth
                    onChange={e => setValue(e.target.value)}
                    helperText={errorMessage}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAddCloset}>Add Closet</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddNewClosetDialog;
