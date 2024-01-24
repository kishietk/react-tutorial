import { useAuth } from '../useHooks/useAuth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

function UserProfile() {
    const { getMe } = useAuth();
    const user = useSelector((state) => state?.auth?.user);
    useEffect(() => {
        getMe();
    }, []);

    return <div className='user-profile'>
        <h3>User Profile Feature</h3>
        <p>hello, {user?.name} !</p>
        {user?.admin && <div>
            <p>you are admin</p>
            <Link to="/admin">link to admin page</Link>
        </div>}
    </div>;
}

export default UserProfile;