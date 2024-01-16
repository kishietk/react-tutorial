import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="AuthLayout">
            <h2>AuthLayout</h2>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to="home"> Home </Link>
                    </li>
                    <li>
                        <Link to="about"> About </Link>
                    </li>
                    <li>
                        <Link to="/"> Log In </Link>
                    </li>
                    <li>
                        <Link to="signup"> Sign Up </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}