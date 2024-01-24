import { Link } from "react-router-dom";

export default function Menu() {
    return <nav className="nav-bar">
        <ul>
            <li>
                <Link to="/home"> Home </Link>
            </li>
            <li>
                <Link to="/login"> Log In </Link>
            </li>
            <li>
                <Link to="logout"> Log Out </Link>
            </li>
        </ul>
    </nav>
}