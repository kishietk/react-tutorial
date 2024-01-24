import { Link, Outlet } from "react-router-dom";

export default function About() {
    return <div className="content">
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="child-a"> Child A </Link>
                </li>
                <li>
                    <Link to="child-b"> Child B </Link>
                </li>
                <li>
                    <Link to="child-c"> Child C </Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
}