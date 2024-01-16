import { useQuery } from 'react-query';
import { useAuth } from '../services/useAuth';

function FetchAccessToken({data}) {
    const { login } = useAuth();
    
    const fetchAccessToken = async () => {
        const { email, password } = data;
        const { accessToken, expiresAt } = await login(email, password);
        return { accessToken, expiresAt };
    };
    
    const { isLoading, isError, error } = useQuery(
        'fetchAccessToken',
        fetchAccessToken,
        { retry: 1, }
    );

    if (isLoading) return <span>Loading...</span>;
    if (isError) return <span>Error: {error.message}</span>;


    return (
        <>
            <h2>Login succeeded</h2>
        </>
    );
}

export default FetchAccessToken;