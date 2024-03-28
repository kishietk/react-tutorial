import { Typography, Chip, Alert, Box, Card, CardContent, } from '@mui/material';
import { useGetMeQuery, useGetUserByIdQuery } from '../redux/api/userSlice';
import Loading from '../components/Loading';

const ProfileCard = ({ user }) => (
    <Box marginBottom={2}>
        <Card>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" padding={2}>
                    <Typography variant="h4" gutterBottom>
                        Hello, {user.name ?? "Guest"}!
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    </Box>
);

const PermissionCard = ({ permissions }) => (
    <Card>
        <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" padding={2}>
                <Typography variant="h6">
                    Permissions:{
                        permissions.length ? permissions.map((item, index) => (
                            <Chip key={index} label={item?.name} />
                        )) : <Chip variant="outlined" label={"No Permission"} />
                    }
                </Typography>
            </Box>
        </CardContent>
    </Card>
);

function Home() {
    const { data: me, error: meError, isLoading: meLoading } = useGetMeQuery();
    const { data: user, error: userError, isLoading: userLoading } = useGetUserByIdQuery(me?.id, { skip: !me });

    if (meLoading || userLoading) return <Loading />
    if (meError || userError) return <Alert severity="error">faild to get my plofile</Alert>

    return user && (
        <>
            <ProfileCard user={user} />
            <PermissionCard permissions={user.permissions} />
        </>
    );
}

export default Home;