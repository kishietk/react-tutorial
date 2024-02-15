import authApi from '../services/authApi';
import userApi from '../services/userApi';
import isTokenValid from '../utils/isTokenValid';
import { useDispatch, useSelector } from 'react-redux';
import {
    login as executeLogin,
    logout as executeLogout,
    updateToken,
    updateUser
} from '../redux/auth/slices';
import { updateUserList } from '../redux/userList/slices.js';
//import { useNavigate } from 'react-router-dom';

export function useAuth() {
    //const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state?.auth?.token);

    // Login request to API
    const login = async (email, password) => {
        try {
            // Send username(email) and password to API to login
            const { accessToken, expiresAt } = await authApi.login(email, password);

            // If token is not vallid, return false
            const isValid = isTokenValid({ accessToken, expiresAt });
            if (!isValid) return false;

            // If token is vallid, save to redux
            dispatch(updateToken({ accessToken, expiresAt }));  // Execute Redux updateToken action
            dispatch(executeLogin(true));                       // Execute Redux login action

            // Save to local strage
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("expiresAt", expiresAt);
            localStorage.setItem("isLogin", true);
            return true;
        }
        catch (e) {
            throw e;
        }
    };

    // Logout request to API
    const logout = async () => {
        try {
            // Send the accessToken to API to logout
            const success = await authApi.logout(token.accessToken);

            // Execute Redux logout action
            if (success) dispatch(executeLogout());

            // Remove to local strage
            localStorage.removeItem("accessToken");
            localStorage.removeItem("expiresAt");
            localStorage.removeItem("isLogin");

            return success;
        }
        catch (error) {
            throw error;
        };
    };

    // Signup request to API
    const signup = async (formData) => {
        try {

            console.log(formData);

            // Get Invitation Account here
            // const invitationToken = await authApi.getInvitation({});

            // Send the accessToken to API to logout
            const success = await authApi.signup({
                ...formData,
                //invitationToken: invitationToken,
            });

            console.log(success);
            return success;
        }
        catch (error) {
            throw error;
        };
    };

    // Get current user information from API
    const getMe = async () => {
        try {
            // Get user from API
            const user = await userApi.getMe();

            // Execute Redux updateUser action: auth.user will be updated
            dispatch(updateUser(user));
            return user;
        }
        catch (error) {
            throw error;
        };
    };

    // Get all users information from API
    const getUserList = async () => {
        try {
            // Get users from API
            const userList = await userApi.getUserList();

            //redux
            dispatch(updateUserList(userList));
            return userList;
        }
        catch (error) {
            throw error;
        };
    };

    const getUserById = async (id) => {
        try {
            const user = await userApi.getUserById(id);
            console.log(user);
            return user;
        }
        catch (error) {
            throw error;
        };
    };

    return {
        login,
        logout,
        signup,
        getMe,
        getUserList,
        getUserById,
    };
}