import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from '@mui/icons-material/Logout';

const color = "#FFFFFF";
export const auth = [
    {
        title: "Home",
        link: "/home",
        icon: {
            material: HomeIcon,
            sx: { color: color }
        },
    },
    {
        title: "Log Out",
        link: "/logout",
        icon: {
            material: LogoutIcon,
            sx: { color: color }
        },
    },
];
