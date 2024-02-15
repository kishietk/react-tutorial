import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import UserComponent from "../components/User"
import BackPageButton from "../components/BackPageButton";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";

export default function User() {
    // Hooks
    const navigate = useNavigate();

    // Get user data from url id
    const userList = useSelector((state) => state?.userList?.userList);
    let { id } = useParams();
    const user = userList[id];
    if (!user) navigate("/notfound", { replace: true });

    return <div className="content">
        <div className="user">
            <UserComponent user={user} />
            <Button
                variant="outlined"
                startIcon={<EditIcon />}
                onClick={() => { navigate(`/admin/edituser/${id}`, { replace: true }); }}
            >
                edit this user
            </Button>

            <BackPageButton
                buttonText='back to the user list'
                specifiedPath={"/admin/userlist"}
            />
        </div>
    </div>;
};
