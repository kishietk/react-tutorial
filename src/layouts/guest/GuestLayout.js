import { Outlet } from "react-router-dom";
import Header from "../../components/Header.js";
import Fooder from "../../components/Footer.js";
import Menu from "./Menu.js";

export default function GuestLayout() {
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