import { useAuth } from '../../../useHooks/useAuth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Profile() {
    const { getMe } = useAuth();
    const user = useSelector((state) => state?.auth?.user);
    useEffect(() => {
        getMe();
    }, []);

    return <>
        <h3>User Profile Feature</h3>
        <p>hello, {user?.name ?? "guest"} !</p>
    </>
}

export default Profile;