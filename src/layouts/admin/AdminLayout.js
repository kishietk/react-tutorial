import { Outlet } from "react-router-dom";
import Menu from "./Menu.js";
import Header from "../../components/Header.js";
import Fooder from "../../components/Footer.js";

export default function AdminLayout() {
    return <div className="app">
        <Header />
        <div className="container">
            <Menu />
            <div className="main">
                <Outlet />
            </div>
        </div>
        <Fooder />
    </div>
}