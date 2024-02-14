import {
    Box,
    Container,
    Grid,
    Typography,
    Paper
} from "@mui/material";

const data = [
    { name: "user list", id: "0" },
    { name: "aaa", id: "1" },
    { name: "bbb", id: "2" },
    { name: "ccc", id: "3" },
    { name: "ddd", id: "4" },
    { name: "eee", id: "5" },
    { name: "fff", id: "6" },
    { name: "ggg", id: "7" },
    { name: "hhh", id: "8" },
    { name: "iii", id: "9" },
];

export default function Admin() {
    return <div className="content">
        <Box sx={{ backgroundColor: "#ffffff" }}>
            <Container maxWidth="md">
                <Grid container rowSpacing={0} columnSpacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography component="h2" variant="h2">
                            Admin Page
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        justifyContent="center"
                        spacing={4}
                    >
                        {data.map((value) => (
                            <Grid key={value.id} item>
                                <Paper
                                    sx={{
                                        height: 140,
                                        width: 240,
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    {value.name}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </div>;
};