import { useAuth } from '../useHooks/useAuth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function UserProfile() {
    const { getMe } = useAuth();
    const user = useSelector((state) => state?.auth?.user);
    useEffect(() => {
        getMe();
    }, []);

    return <>
        <div className='user-profile'>
            <h3>User Profile Feature</h3>
            <p>hello, {user?.name} !</p>
        </div>
    </>
}

export default UserProfile;