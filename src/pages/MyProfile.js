import Profile from '../features/Profile';
import BackPageButton from '../features/components/BackPageButton';
import EditIcon from '@mui/icons-material/Edit';
import EditProfileDialog from '../features/components/EditProfileDialog';
import { Grid, Alert } from '@mui/material';
import Loading from '../components/Loading';
import { useGetMeQuery, useGetUserByIdQuery } from '../redux/api/userSlice';

export default function MyProfile() {

    const { data: me, error: meError, isLoading: meLoading } = useGetMeQuery();
    const { data: user, error: userError, isLoading: userLoading } = useGetUserByIdQuery(me?.id);

    if (meLoading || userLoading) return <Loading />
    if (meError || userError) return <Alert severity="error">faild to get my plofile</Alert>

    return user && <div className='content'>
        <Grid container style={{ display: "block", justifyContent: "center" }}>
            <Profile user={user} />
            <EditProfileDialog
                openButtonText='Edit Profile'
                startIcon={<EditIcon />}
                user={user}
            />
            <BackPageButton />
        </Grid>
    </div>
};