import { Outlet } from "react-router-dom";
import Header from "../components/Header.js";
import Fooder from "../components/Footer.js";
import Sidebar from "../components/AuthSidebar/AuthSidebar.js"

export default function AuthLayout() {
    return <div className="app">
        <Header />
        <div className="container">
            <Sidebar />
            <div className="main">
                <Outlet />
            </div>
        </div>
        <Fooder />
    </div>
}