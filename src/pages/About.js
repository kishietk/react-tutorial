import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";

export default function About() {
    return <div className="content">
        <Box sx={{ height: "40vh"}}>
            <Container maxWidth="md">
                <Grid container rowSpacing={0} columnSpacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography component="h2" variant="h2">
                            Information Page
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography>
                            texttexttexttexttexttexttexttexttexttexttexttexttext
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </div>;
};