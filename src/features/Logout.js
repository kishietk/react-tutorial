import { useAuth } from '../useHooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";

export default function Logout() {
    const { logout } = useAuth();

    const handleOnClick = async () => {
        try {
            await logout();
        }
        catch (e) {
            throw e;
        }
    };

    return <>
        <Button
            variant="outlined"
            startIcon={<LogoutIcon />}
            onClick={handleOnClick}
        >
            Logout
        </Button>
    </>;
};