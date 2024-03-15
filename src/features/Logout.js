import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Alert } from "@mui/material";
import { useLogoutMutation } from '../redux/api/authSlice';
import Loading from '../components/Loading';
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    const [logout, { isLoading, error }] = useLogoutMutation();

    const handleOnClick = async () => {
        try {
            const res = await logout();

            // Remove to local strage
            localStorage.removeItem("accessToken");
            localStorage.removeItem("expiresAt");

            // redirect to login page
            navigate("/login");
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

        {isLoading && <Loading />}
        {error && <Alert severity="error">faild to logout</Alert>}
    </>;
};