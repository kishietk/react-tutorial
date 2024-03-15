import isTokenValid from '../utils/isTokenValid';
import { useLoginMutation, useLogoutMutation } from '../redux/api/authSlice';
import { useNavigate } from "react-router-dom";

export function useAuth() {
    const [executeLogin, { isLoadingLogin, errorLogin }] = useLoginMutation();
    const navigate = useNavigate();

    // Login request to API
    const login = async (username, password, onLoading, onError) => {
        try {
            const res = await executeLogin({ username, password }).unwrap();
            if (isLoadingLogin) onLoading();
            if (errorLogin) onError();

            if (res.success) {
                // check token
                const { accessToken, expiresAt } = res.data;
                const isValid = isTokenValid({ accessToken, expiresAt });
                if (!isValid) return false;

                // Save to local strage
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('expiresAt', expiresAt);

                // redirect to home
                navigate("/home");
            }
            return true;
        }
        catch (e) {
            throw e;
        }
    };

    // Logout request to API
    // const logout = async () => {
    //     try {
    //         // Send the accessToken to API to logout
    //         const success = await authApi.logout(token.accessToken);

    //         // Execute Redux logout action
    //         if (success) dispatch(executeLogout());

    //         // Remove to local strage
    //         localStorage.removeItem("accessToken");
    //         localStorage.removeItem("expiresAt");
    //         localStorage.removeItem("isLogin");

    //         return success;
    //     }
    //     catch (error) {
    //         throw error;
    //     };
    // };

    // // Signup request to API
    // const signup = async (formData) => {
    //     try {

    //         console.log(formData);

    //         // Get Invitation Account here
    //         // const invitationToken = await authApi.getInvitation({});

    //         // Send the accessToken to API to logout
    //         const success = await authApi.signup({
    //             ...formData,
    //             //invitationToken: invitationToken,
    //         });

    //         console.log(success);
    //         return success;
    //     }
    //     catch (error) {
    //         throw error;
    //     };
    // };

    // Get current user information from API
    // const getMe = async () => {
    //     try {
    //         // Get user from API
    //         const me = await userApi.getMe();
    //         const meDetail = await userApi.getUserById(me?.id);

    //         // Execute Redux updateUser action: auth.user will be updated
    //         dispatch(updateUser(meDetail));
    //         return meDetail;
    //     }
    //     catch (error) {
    //         throw error;
    //     };
    // };

    // // Get all users information from API
    // const getUserList = async () => {
    //     try {
    //         // Get users from API
    //         const userList = await userApi.getUserList();

    //         //redux
    //         dispatch(updateUserList(userList));
    //         return userList;
    //     }
    //     catch (error) {
    //         throw error;
    //     };
    // };

    // const getUserById = async (id) => {
    //     try {
    //         const user = await userApi.getUserById(id);
    //         console.log(user);
    //         return user;
    //     }
    //     catch (error) {
    //         throw error;
    //     };
    // };

    // const updateProfile = async (formData) => {
    //     try {
    //         const res = await userApi.updateProfile(formData);
    //         return res;
    //     }
    //     catch (error) {
    //         throw error;
    //     };
    // };

    return {
        login,
        //logout,
        // signup,
        // getMe,
        // getUserList,
        // getUserById,
        // updateProfile,
    };
}