import { useRoutes } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Login from "../pages/Login.js";
import Logout from "../pages/Logout.js";
import SignUp from "../pages/SignUp.js";
import User from "../pages/User.js"
import UserList from "../pages/UserList.js"
import NotFound from "../pages/NotFound.js";
import FailedLogin from "../pages/FailedLogin.js";
import Me from "../components/Me.js";
import AuthLayout from "../layouts/AuthLayout.js";
import GuestLayout from "../layouts/GuestLayout.js";
import AdminLayout from "../layouts/AdminLayout.js";
import GuestRoute from "./GuestRoute.js";
import AuthRoute from "./AuthRoute.js";
import AdminRoute from "./AdminRoute.js";
import Admin from "../pages/Admin.js";
import UserEditer from "../pages/UserEditer.js";
import UserNameEditer from "../features/UserNameEditer/index.js";
import UserEmailEditer from "../features/UserEmailEditer.js";
import UserGroupsEditer from "../features/UserGroupsEditer.js";
import UserPermissionsEditer from "../features/UserPermissionsEditer.js";

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
            path: 'home',
            element: <AuthRoute><AuthLayout /></AuthRoute>,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'me',
                    element: <Me />,
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
            path: 'admin',
            element: <AdminRoute><AdminLayout /></AdminRoute>,
            children: [
                {
                    index: true,
                    element: <Admin />,
                },
                {
                    path: 'userlist',
                    element: <UserList />,
                },
                {
                    path: 'user',
                    children: [
                        {
                            path: ':id',
                            element: <User />,
                        },
                        {
                            path: '*',
                            element: <NotFound />,
                        },
                    ],
                },
                {
                    path: 'edituser',
                    children: [
                        {
                            path: ':id',
                            element: <UserEditer />,
                        },
                        {
                            path: 'name',
                            children: [
                                {
                                    path: ':id',
                                    element: <UserNameEditer />,
                                },
                                {
                                    path: '*',
                                    element: <NotFound />,
                                },
                            ],
                        },
                        {
                            path: 'email',
                            children: [
                                {
                                    path: ':id',
                                    element: <UserEmailEditer />,
                                },
                                {
                                    path: '*',
                                    element: <NotFound />,
                                },
                            ],
                        },
                        {
                            path: 'groups',
                            children: [
                                {
                                    path: ':id',
                                    element: <UserGroupsEditer />,
                                },
                                {
                                    path: '*',
                                    element: <NotFound />,
                                },
                            ],
                        },
                        {
                            path: 'permissions',
                            children: [
                                {
                                    path: ':id',
                                    element: <UserPermissionsEditer />,
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
            ],
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);
};