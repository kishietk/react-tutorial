import { Outlet } from "react-router-dom";
import Header from "../components/Header.js";
import Fooder from "../components/Footer.js";
import Sidebar from "../components/GuestSidebar"

export default function GuestLayout() {
    return <div className="app">
        <Header />
        <div className="main-container">
            <Sidebar />
            <div className="main">
                <Outlet />
            </div>
        </div>
        <Fooder />
    </div>
};