import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';

const color = "#FFFFFF";
export const guest = [
    {
        title: "Home", 
        link: "/home",
        icon: {
            material: HomeIcon,
            sx: { color: color }
        },
    },
    {
        title: "Log In",
        link: "/login",
        icon: {
            material: LoginIcon,
            sx: { color: color }
        },
    },
    {
        title: "Infomation",
        link: "/about",
        icon: {
            material: InfoIcon,
            sx: { color: color }
        },
    },
];