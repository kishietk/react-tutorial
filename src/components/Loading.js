import React from 'react'
import { Grid, Typography, CircularProgress } from '@mui/material';

function Loading({ message = "is loading ...", variant = "h6", component = "div", iconSize = 24 }) {
    return <Grid container direction="row" alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
            <Typography
                gutterBottom
                variant={variant}
                component={component}
            >
                {message}
            </Typography>
        </Grid>
        <Grid item>
            <CircularProgress size={iconSize} />
        </Grid>
    </Grid>
}

export default Loading
