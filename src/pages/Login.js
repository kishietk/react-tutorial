import LoginFeature from "../features/Login";
import React from "react";
import { Button, Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const handleItemClick = (link) => { navigate(link, { replace: true }); };

    return <div className="content">
        <h1>Log in Page</h1>
        <Box sx={{ height: "80vh" }}>
            <LoginFeature />

            <div className="m-5">
                <p>If you don't have an account, sign up </p>
                <Button
                    variant="outlined"
                    startIcon={<AccountCircleIcon />}
                    onClick={() => { handleItemClick("/signup") }}
                >Sign Up</Button>
            </div>
        </Box>
        
    </div>
}