import { useSelector } from 'react-redux'
import Profile from '../features/Profile/MyProfile';
import BackPageButton from '../features/components/BackPageButton';
import EditIcon from '@mui/icons-material/Edit';
import EditProfileDialog from '../features/components/EditProfileDialog';
import { Grid } from '@mui/material';

export default function MyProfile() {
    const me = useSelector((state) => state?.auth?.user);

    return <div className='content'>
        <Grid container style={{ display: "block", justifyContent: "center" }}>

            <Profile me={me} />

            <EditProfileDialog
                openButtonText='Edit Profile'
                startIcon={<EditIcon />}
            />

            <BackPageButton />
        </Grid>

    </div>
};