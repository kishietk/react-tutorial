import axios from 'axios'
import getAccessToken from './getAccessToken';

const getCurrentUser = async () => {
    try {
        // Get access-token from local strage
        const token = getAccessToken();

        // Send request to the server
        const response = await axios.get('http://192.168.2.152:8080/api/v1.0/me', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });

        // If success, return list of user
        return response?.data;
    }
    catch (e) {
        throw e;
    }
};

const userApi = { 
    getCurrentUser: getCurrentUser,
};

export default userApi;