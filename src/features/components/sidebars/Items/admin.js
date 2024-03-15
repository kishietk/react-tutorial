import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const color = "#FFFFFF";
export const admin = [
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
    {
        title: "Admin",
        icon: {
            material: AdminPanelSettingsIcon,
            sx: { color: color }
        },
        children: [
            {
                title: "User List",
                link: "/userlist",
                icon: {
                    material: PeopleIcon,
                    sx: { color: color }
                },
            },
        ]
    },
];