import { Typography, Chip, Alert, Box } from '@mui/material';
import { useGetMeQuery, useGetUserByIdQuery } from '../redux/api/userSlice';
import Loading from '../components/Loading';

function Home() {
    const { data: me, error: meError, isLoading: meLoading } = useGetMeQuery();
    const { data: user, error: userError, isLoading: userLoading } = useGetUserByIdQuery(me?.id);

    if (meLoading || userLoading) return <Loading />
    if (meError || userError) return <Alert severity="error">faild to get my plofile</Alert>

    return user && <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" padding={2}>
        <Typography variant="h4" gutterBottom>
            Hello, {user.name ?? "Guest"}!
        </Typography>
        <Typography variant="h6">
            Permissions:
            {user.permissions.length
                ? user.permissions.map((permission, index) => (
                    <Chip key={index} label={permission.name} />
                ))
                : <Chip variant="outlined" label="No Permission" />
            }
        </Typography>
    </Box>;
}

export default Home;