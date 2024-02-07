import { api } from "./api";
const { post } = api;

const login = async (username, password) => {
    try {
        // post
        const res = await post('/login', {
            username: username,
            password: password,
        });
        const { accessToken, expiresAt } = res?.data?.data;
        return { accessToken, expiresAt };
    } catch (e) {
        throw e;
    }
}

const logout = async () => {
    try {
        // post
        const res = await post('/logout');
        const successs = res?.data?.success

        //redirect to '/login'

        return successs;
    }
    catch (e) {
        throw e;
    }
}

const signup = async (formData) => {
    try {
        // post
        const res = await post('/register', formData);
        return res;
    } catch (e) {
        throw e;
    }
}

const authApi = {
    login,
    logout,
    signup,
};

export default authApi;