import Profile from '../features/Profile';
import BackPageButton from '../features/components/BackPageButton';
import { Grid, Alert } from '@mui/material';
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from '../redux/api/userSlice';
import Loading from '../components/Loading';

export default function UserProfile() {

    // Get user data from url id
    let { id } = useParams();
    const { data: user, error: userError, isLoading: userLoading } = useGetUserByIdQuery(id);

    if (userLoading) return <Loading />
    if (userError) return <Alert severity="error">faild to get my plofile</Alert>


    return <div className='content'>
        <Grid container style={{ display: "block", justifyContent: "center" }}>
            <Profile user={user} />
            <BackPageButton />
        </Grid>
    </div>
};