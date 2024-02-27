import Dialog from "../../../components/CustomDialog"
import { ACTION_TYPE } from "../../../components/CustomDialog"
import { useState } from 'react';
import { Button } from '@mui/material';
import UpdateGeneralInfo from "./forms/UpdateGeneralInfo"
import { updateUser } from '../../..//redux/auth/slices';
import { useDispatch } from 'react-redux';

export default function EditProfileDialog({ openButtonText, startIcon }) {

    const dispatch = useDispatch();

    // whether the dialog is open
    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const handleOnUpdate = (formData, res) => {

        // process to save response to local
        dispatch(updateUser(formData));

        // process to show alert message
        const successed = res?.data.success;
        const message = res?.data.message;


        setOpen(false);
    }

    return <>
        <Button
            variant="outlined"
            startIcon={startIcon ?? null}
            onClick={handleOpen}
        >
            {openButtonText ?? ""}
        </Button>

        <Dialog
            title="update my profile"
            actionType={ACTION_TYPE.None}
            open={open}
            handleClose={handleClose}
        >
            <UpdateGeneralInfo handleClose={handleClose} handleOnUpdate={handleOnUpdate} />
        </Dialog>
    </>
}