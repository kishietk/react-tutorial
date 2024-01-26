import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Login from "../pages/Login.js";
import Logout from "../pages/Logout.js";
import SignUp from "../pages/SignUp.js";
import User from "../pages/User.js"
import UserList from "../pages/UserList.js"
import NotFound from "../pages/NotFound.js";
import FailedLogin from "../pages/FailedLogin.js";
import ChildA from "../components/ChildA.js";
import ChildB from "../components/ChildB.js";
import ChildC from "../components/ChildC.js";
import AuthLayout from "../layouts/auth/AuthLayout.js";
import GuestLayout from "../layouts/guest/GuestLayout.js";
import AdminLayout from "../layouts/admin/AdminLayout.js";
import { useRoutes } from "react-router-dom";
import GuestRoute from "./GuestRoute.js";
import AuthRoute from "./AuthRoute.js";
import AdminRoute from "./AdminRoute.js";
import Admin from "../pages/Admin.js";
import UserEditer from "../pages/UserEditer.js";
import UserNameEditer from "../features/UserNameEditer/index.js";
import UserEmailEditer from "../components/UserEmailEditer.js";
import UserGroupsEditer from "../components/UserGroupsEditer.js";
import UserPermissionsEditer from "../components/UserPermissionsEditer.js";

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
                    children: [
                        {
                            index: true,
                            element: <h2>About Page</h2>,
                        },
                        {
                            path: 'child-a',
                            element: <ChildA />,
                        },
                        {
                            path: 'child-b',
                            element: <ChildB />,
                        },
                        {
                            path: 'child-c',
                            element: <ChildC />,
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
            path: 'home',
            element: <AuthRoute><AuthLayout /></AuthRoute>,
            children: [
                {
                    index: true,
                    element: <Home />,
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
                            ],
                        },
                        {
                            path: 'email',
                            children: [
                                {
                                    path: ':id',
                                    element: <UserEmailEditer />,
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
                            ],
                        },
                        {
                            path: 'permissions',
                            children: [
                                {
                                    path: ':id',
                                    element: <UserPermissionsEditer />,
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