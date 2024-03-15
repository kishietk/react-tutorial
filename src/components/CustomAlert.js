import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function CustomAlert({ message, icon = <CheckIcon fontSize="inherit" /> }) {
    return <>
        <Alert
            icon={icon}
            severity="success"
        >
            {message}
        </Alert>
    </>
}