import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button,
    Alert
} from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function About() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                setOpen(false);
            }, 2000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [open]);

    return <div className="content">
        <Box sx={{ height: "40vh" }}>
            <Container maxWidth="md">
                <Grid container rowSpacing={0} columnSpacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography component="h2" variant="h2">
                            Information Page
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            texttexttexttexttexttexttexttexttexttexttexttexttext
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image="https://source.unsplash.com/random"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Card Example
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This is an example of a card. You can use it to display information in a more structured format.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button variant="contained" color="primary" onClick={handleClick}>
                            Show Alert
                        </Button>
                        {open &&
                            <Alert severity="success" onClose={() => { setOpen(false); }}>
                                This is a success alert — check it out!
                            </Alert>
                        }
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </div>;
};