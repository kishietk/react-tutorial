import { useState, useCallback, useMemo } from 'react';
import authenticate from './authenticate';
import userApi from './userApi';
import getAccessToken from './getAccessToken';

export function useAuth() {
    // usre data
    const [user, setUser] = useState(null);

    //authenticate
    const { loginAuth, logoutAuth } = authenticate;

    const accessToken = useMemo(() => {
        return getAccessToken();
    }, [user]);

    // Login
    const login = useCallback(async (email, password) => {
        try {
            console.log("login");
            const rs = await loginAuth(email, password);

            // ok

            // redirection '/home'




            return rs;

        } catch (error) {
            throw error
        }

    }, []);

    // Logout
    const logout = useCallback(() => {
        return logoutAuth();
    }, []);

    const getMe = useCallback(async () => {
        const response = await userApi.getCurrentUser();
        setUser(response.data);
    }, []);

    return { login, logout, user, getMe, accessToken };
}