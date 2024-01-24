import { Link } from "react-router-dom";

export default function Menu() {
    return <nav className="nav-bar">
        <ul>
            <li>
                <Link to="/home"> Home </Link>
            </li>
            <li>
                <Link to="userlist"> User List </Link>
            </li>
        </ul>
    </nav>
}