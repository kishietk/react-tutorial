import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Login from "../pages/Login.js";
import Logout from "../pages/Logout.js";
import SignUp from "../pages/SignUp.js";
import NotFound from "../pages/NotFound.js";
import FailedLogin from "../pages/FailedLogin.js";
import MyProfile from "../pages/MyProfile.js";
import AuthLayout from "../layouts/AuthLayout.js";
import GuestLayout from "../layouts/GuestLayout.js";
import AdminLayout from "../layouts/AdminLayout.js";
import GuestRoute from "./GuestRoute.js";
import AuthRoute from "./AuthRoute.js";
import AdminRoute from "./AdminRoute.js";
import UserList from "../pages/UserList";
import UserProfile from "../pages/UserProfile";

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <GuestRoute><GuestLayout /></GuestRoute>,
            children: [
                {
                    index: true,
                    element: <Login />,
                },
                {
                    path: 'login',
                    element: <Login />,
                },
                {
                    path: 'faild_login',
                    element: <FailedLogin />,
                },
                {
                    path: "signup",
                    element: <SignUp />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: '*',
                    element: <NotFound />,
                },
            ],
        },
        {
            element: <AuthRoute><AuthLayout /></AuthRoute>,
            children: [
                {
                    path: 'home',
                    children: [
                        {
                            index: true,
                            element: <Home />,
                        },
                        {
                            path: 'me',
                            element: <MyProfile />,
                        },
                        {
                            path: '*',
                            element: <NotFound />,
                        },
                    ],
                },
                {
                    path: 'logout',
                    element: <Logout />,
                },
                {
                    path: '*',
                    element: <NotFound />,
                },
            ],
        },
        {
            element: <AdminRoute><AdminLayout /></AdminRoute>,
            children: [
                {
                    path: 'userlist',
                    children: [
                        {
                            index: true,
                            element: <UserList />,
                        },
                        {
                            path: ':id',
                            element: <UserProfile />,
                        },
                        {
                            path: '*',
                            element: <NotFound />,
                        },
                    ],
                },
                {
                    path: '*',
                    element: <NotFound />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);
};