import { Link } from "react-router-dom";

export default function Menu() {
    return <nav className="nav-bar">
        <ul>
            <li>
                <Link to="about"> About </Link>
            </li>
            <li>
                <Link to="login"> Log In </Link>
            </li>
            <li>
                <Link to="signup"> Sign Up </Link>
            </li>
            <li>
                <Link to="home"> Home </Link>
            </li>
        </ul>
    </nav>
}