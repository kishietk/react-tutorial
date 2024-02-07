import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const handleItemClick = (link) => { navigate(link, { replace: true }); };

    return <div className="header">
        <h2 onClick={() => handleItemClick("/")}>
            Header
        </h2>
    </div>;
}