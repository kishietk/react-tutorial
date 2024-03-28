import HomeFeature from "../features/Home";
import { Box } from '@mui/material';

export default function Home() {
    return <div className="content">
        <Box sx={{ height: "80vh" }}>
            <HomeFeature />
        </Box>
    </div>;
};