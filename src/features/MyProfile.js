import { Grid, Typography, Stack, Chip, Paper, Avatar } from '@mui/material';
import DefaultIcon from "../images/icon.png";

export default function MyProfile({ user }) {
    return <Grid container spacing={4}>
        <Grid item xs={12}>
            <Typography variant="h4" align="center">
                {user.name}'s Profile
            </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
            <Stack spacing={2} style={{ textAlign: "left" }}>
                <Typography variant="h6">ID: <Chip label={user.id} /></Typography>
                <Typography variant="h6">Name: <Chip label={user.name} /></Typography>
                <Typography variant="h6">Role: <Chip label={user.admin ? "Admin" : "User"} /></Typography>
                <Typography variant="h6">Signature: <Chip label={user.signature} /></Typography>
                <Typography variant="h6">Phone: <Chip label={user.phone ?? "phone is not set"} /></Typography>
                <Typography variant="h6">Email: <Chip label={user.email ?? "email is not set"} /></Typography>

                <Typography variant="h6">
                    Groups:
                    {user.groups?.length
                        ? user.groups.map((group, index) => (
                            <Chip key={index} label={group.name} />
                        ))
                        : <Chip variant="outlined" label="Not Affiliation" />
                    }
                </Typography>
                <Typography variant="h6">
                    Permissions:
                    {user.permissions?.length
                        ? user.permissions.map((permission, index) => (
                            <Chip key={index} label={permission.name} />
                        ))
                        : <Chip variant="outlined" label="No Permission" />
                    }
                </Typography>
            </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">Avatar Image</Typography>
                    <Avatar src={user.avatar ?? DefaultIcon} sx={{ width: 150, height: 150, margin: 'auto' }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">About Me</Typography>
                    <Paper sx={{ p: 2, minHeight: 240 }}>
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                            {user.aboutMe}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    </Grid>;
};