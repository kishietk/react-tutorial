import { Outlet } from "react-router-dom";
import Header from "../features/Header.js";
import Fooder from "../features/Footer.js";
import Sidebar from "../features/components/sidebars/GuestSidebar";

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