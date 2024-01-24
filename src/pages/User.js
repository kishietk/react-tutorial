import { useState } from "react";
import { useSelector } from 'react-redux';
import { useParams, Navigate } from "react-router-dom";
import UserComponent from "../components/User"

export default function User() {
    //
    const [nav, setNav] = useState(false);

    // Get user data from url id
    const userList = useSelector((state) => state?.userList?.userList);
    let { id } = useParams();
    const user = userList[id];

    if (!user) {
        console.log("404");
        return <Navigate to={`/notfound`} replace />
    }

    return <div className="content">
        <div className="user">
            <>
                <UserComponent user={user} />

                <button onClick={() => { setNav(true) }}>edit this user</button>
                {nav && <Navigate to={`/admin/edituser/${id}`} replace />}
            </>
        </div>
    </div>;
};