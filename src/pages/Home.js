import Profile from "../features/components/homes/Plofile";
import { Box } from "@mui/material";

export default function Home() {
    return <div className="content">
        <Box sx={{ height: "80vh"}}>
            <Profile />
        </Box>
    </div>;
};