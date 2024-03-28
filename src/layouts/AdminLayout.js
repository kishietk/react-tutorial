import { Outlet } from "react-router-dom";
import Header from "../features/Header.js";
import Fooder from "../features/Footer.js";
import AdminSidebar from "../features/components/sidebars/AdminSidebar.js";

export default function AdminLayout() {
    return <div className="app">
        <Header />
        <div className="main-container">
            <AdminSidebar />
            <div className="main">
                <Outlet />
            </div>
        </div>
        <Fooder />
    </div>
}