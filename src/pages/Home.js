import HomeFeature from "../features/Home";
import { Card, CardContent, Box } from '@mui/material';

export default function Home() {
    return <div className="content">
        <Box sx={{ height: "80vh" }}>
            <Card>
                <CardContent>
                    <HomeFeature />
                </CardContent>
            </Card>
        </Box>
    </div>;
};