import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";

export default function Router() {
    return useRoutes([
        {
            element: <GuestLayout />,
            children: [
                {
                    path: "/",
                    element: <Login />
                },
                {
                    path: "signup",
                    element: <SignUp />
                },
            ]
        },
        {
            element: <AuthLayout />,
            children: [
                {
                    path: "home",
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
            ]
        },

    ]);
}