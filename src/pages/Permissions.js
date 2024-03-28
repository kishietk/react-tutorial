import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { permissions } from '../utils/permissions';

export default function Permissions() {
    let { code } = useParams();
    const [permissionName, setPermissionName] = useState("");

    useEffect(() => {
        // Use the ENUM to set the name
        setPermissionName(permissions[code] || permissions.default);
    }, [code]);

    return <div className='content'>
        <Grid container style={{ display: "block", justifyContent: "center" }}>
            <h2>{permissionName}</h2>
        </Grid>
    </div>;
};