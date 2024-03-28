import { Outlet } from "react-router-dom";
import Header from "../features/Header.js";
import Fooder from "../features/Footer.js";
import GuestSidebar from "../features/components/sidebars/GuestSidebar.js";

export default function GuestLayout() {
    return <div className="app">
        <Header />
        <div className="main-container">
            <GuestSidebar />
            <div className="main">
                <Outlet />
            </div>
        </div>
        <Fooder />
    </div>
};