import { Grid, Typography, Stack, Chip, Paper } from '@mui/material';
import DefaultIcon from "../../images/icon.png";

export default function UserProfile({ me }) {
    return <Grid container justify="center" mb={5}>
        <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h4" mb={4} >
                {me.name}'s Profile
            </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="h6">id:</Typography>
                <Chip label={me.id} />
            </Stack>
            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="h6">name:</Typography>
                <Chip label={me.name} />
            </Stack>
            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="h6">admin:</Typography>
                <Chip label={me.admin ? "admin" : "member"} />
            </Stack>
            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="h6">signature:</Typography>
                <Chip label={me.signature} />
            </Stack>
            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="h6">phone:</Typography>
                <Chip label={me.phone ?? "phone is not set"} />
            </Stack>
            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="h6">email:</Typography>
                <Chip label={me.email ?? "email is not set"} />
            </Stack>
            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="h6">email:</Typography>
                <Chip label={me.email ?? "email is not set"} />
            </Stack>
            {/* need to serch me.by id */}
            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="h6">groups:</Typography>
                {me.groups
                    ? me.groups?.map((groups, index) => (
                        <Chip label={`${groups.name}`} />
                    ))
                    : <Chip variant="outlined" label={`Not Affiliation`} />
                }
            </Stack>
            <Stack direction="row" spacing={2} mb={2}>
                <Typography variant="h6">permissions:</Typography>
                {me.permissions
                    ? me.permissions.map((permission, index) => (
                        <Chip label={`${permission.name}`} />
                    ))
                    : <Chip variant="outlined" label={`No Permission`} />
                }
            </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={6} m={"auto"} mb={4}>

            <Grid>


            <Typography variant="h6" mb={2}>
                avatar image
            </Typography>
            <img src={me.avatar ?? DefaultIcon} />
                </Grid>

            <Stack direction="column" spacing={2}>
                <Typography variant="h6" mb={2}>
                    aboutMe
                </Typography>
                <Paper
                    variant="outlined"
                    style={{
                        width: '100%',
                        textAlign: "left",
                        padding: '4px',
                        minHeight: '240px'
                    }}
                >
                    <Typography
                        variant="body1"
                        gutterBottom
                        style={{ whiteSpace: 'pre-wrap' }}
                    >
                        {me.aboutMe}
                    </Typography>
                </Paper>
            </Stack>
        </Grid>
    </Grid>
};