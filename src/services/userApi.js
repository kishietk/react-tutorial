import { api } from "./api";

//
const getMe = async () => {
    try {
        // Send request to the server
        //!const res = await api.get('/me');

        // If success, return list of user
        //!return res?.data?.data;
    }
    catch (e) {
        throw e;
    }
};

//
const getUserList = async () => {
    try {
        const res = await api.get('/users/search');

        // Adjust response data
        const array = Object.values(res?.data?.data?.items).sort((a, b) => a.id - b.id);
        const obj = array.reduce((acc, obj) => {
            acc[obj.id] = obj;
            return acc;
        }, {});
        return obj;
    }
    catch (e) {
        throw e;
    }
};

const getUserById = async (id) => {
    try {
        // Send request to the server
        const res = await api.get(`/users/${id}`);

        // If success, return list of user
        return res?.data?.data;
    }
    catch (e) {
        throw e;
    }
};

const userApi = {
    getMe: getMe,
    getUserList: getUserList,
    getUserById: getUserById,
};

export default userApi;