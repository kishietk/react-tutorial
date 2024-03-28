import { Outlet } from "react-router-dom";
import Header from "../features/Header.js";
import Fooder from "../features/Footer.js";
import AuthSidebar from "../features/components/sidebars/AuthSidebar.js";

export default function AuthLayout() {
    return <div className="app">
        <Header />
        <div className="main-container">
            <AuthSidebar />
            <div className="main">
                <Outlet />
            </div>
        </div>
        <Fooder />
    </div>
}