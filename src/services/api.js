import axios from "axios";
const BASE_URL = "http://192.168.2.152:8080/api/v1.0";

// Send the HTTP request using axios
function sendRequest(otherConfig) {

    // Add Bearer token to the headers if existed on local storage
    const accessToken = localStorage.getItem("accessToken");
    const authorization = accessToken ? `Bearer ${accessToken}` : null;

    // HTTP request configuration
    const config = {
        baseURL: BASE_URL,
        ...otherConfig,
        headers: {
            ...otherConfig.headers,
            Authorization: authorization,
        }
    };
    return axios.request(config);
};

// Send POST request
function sendPost(url, data = {}, options = {}) {
    // HTTP request configuration
    const config = {
        method: 'post',
        url: url,
        data: data,
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    };
    return sendRequest(config);
};

// Send GET request
function sendGet(url, data = {}, params = {}, options = {}) {
    // HTTP request configuration
    const config = {
        method: 'get',
        url: url,
        data: data,
        params: params,
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    }
    return sendRequest(config);
};

function sendPut(url, data = {}, options = {}) {
    // HTTP request configuration
    const config = {
        method: 'put',
        url: url,
        data: data,
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    };
    return sendRequest(config);
};

function sendDelete() {
    return null;
};

export const api = {
    get: sendGet,
    post: sendPost,
    put: sendPut,
    delete: sendDelete
};
