import Profile from "../features/UserProfile";
import { Box } from "@mui/material";

export default function Home() {
    return <div className="content">
        <Box sx={{ height: "80vh", backgroundColor: "#ffffff" }}>
            <Profile />
        </Box>
    </div>;
};