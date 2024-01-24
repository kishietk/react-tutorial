import { useParams } from "react-router-dom";
import UserEditerComponent from "../components/UserEditer"

export default function UserEditer() {

    let { id } = useParams();

    return <div className="content">
        <h2>User Editer</h2>
        <UserEditerComponent id={id}/>
    </div>;
};