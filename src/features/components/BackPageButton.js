import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import React from 'react'

export default function BackPageButton({ times = 1, buttonText = "Back", specifiedPath}) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleItemClick = () => {
        // If a path is specified, navigate to that path
        if (specifiedPath) {
            navigate(specifiedPath, { replace: true });
            return;
        }

        // Remove the last segment of the URL as many times as specified
        const pathArray = location.pathname.split('/');
        for (let i = 0; i < times; i++) { pathArray.pop(); }
        const newPath = pathArray.join('/');

        // Navigate to the new URL
        navigate(newPath, { replace: true });
    };

    return <div>
        <Button
            variant="outlined"
            startIcon={<ArrowBackIosNewIcon />}
            onClick={handleItemClick}
        >
            {buttonText}
        </Button>
    </div>;
};