import Dialog from "../../../components/CustomDialog";
import { ACTION_TYPE } from "../../../components/CustomDialog";
import { useState } from 'react';
import { Button, Alert } from '@mui/material';
import UpdateGeneralInfo from "./forms/UpdateGeneralInfo";
import { useUpdateMeMutation } from "../../../redux/api/userSlice";
import Loading from "../../../components/Loading";

export default function EditProfileDialog({ reftch, openButtonText = "open", startIcon, user }) {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [updateMe, { isLoading, error }] = useUpdateMeMutation();

    const handleOpen = () => {
        setMessage("");
        setOpen(true);
    };
    const handleClose = () => { setOpen(false); };
    const handleOnUpdate = async (formData) => {
        try {
            const res = await updateMe(formData).unwrap();
            if (!res.success) return;
            reftch();
            setMessage(res?.message);
            setOpen(false);
        }
        catch (e) { console.log(e); }
    };

    return <>
        {message && <Alert severity="info">{message}</Alert>}
        <Button
            variant="outlined"
            startIcon={startIcon ?? null}
            onClick={handleOpen}
        >
            {openButtonText}
        </Button>

        <Dialog
            title="update my profile"
            actionType={ACTION_TYPE.None}
            open={open}
            handleClose={handleClose}
        >
            <UpdateGeneralInfo
                user={user}
                handleClose={handleClose}
                handleOnUpdate={handleOnUpdate}
            />

            {isLoading && <Loading />}
            {error && <Alert severity="error">{error.message}</Alert>}
        </Dialog>
    </>;
}