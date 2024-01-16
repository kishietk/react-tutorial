import { useQuery } from 'react-query';
import { useAuth } from '../services/useAuth';

function UserProfile() {
    // hook
    const { getMe, user } = useAuth();

    // fetch
    const fetchUserProfile = async () => {
        await getMe();
        return user;
    }

    // [React Query] useQuery
    const { isLoading, isError, error } = useQuery(
        'userProfile',
        fetchUserProfile,
        { retry: 1, }
    );

    if (isLoading) return (
        <div className='userProfile'>
            <h1>UserProfile</h1>
            <span>Loading...</span>
        </div>
    );

    if (isError) return (
        <div className='userProfile'>
            <h1>UserProfile</h1>
            <span>Error: {error.message}</span>
        </div>
    );

    return (
        <div className='userProfile'>
            <h1>UserProfile</h1>
            <h2>Hi {user.name} !</h2>
            <button>logout</button>
        </div>
    );
}

export default UserProfile;