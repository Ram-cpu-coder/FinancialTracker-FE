import axios from "axios";

const rootURL = import.meta.env.VITE_API_BASE_URL;

const apiProcessor = async ({ method, url, data, headers }) => {
    try {
        const response = await axios({
            method,
            url,
            data,
            headers
        })
        return response.data
    }
    catch (error) {
        return {
            status: "error",
            message: error?.response?.data?.message || error.message
        }
    }
}

export const loginUser = async (data) => {
    return apiProcessor(
        {
            method: "post",
            url: rootURL + "/users/login",
            data
        })
}
export const getUserDetail = async () => {
    const accessToken = localStorage.getItem("accessToken")
    return apiProcessor({
        method: "get",
        url: rootURL + "/users",
        headers: {
            Authorization: accessToken
        }
    })
}
export const autoLoginAxios = async () => {
    const accessToken = localStorage.getItem("accessToken")
    return apiProcessor({
        method: "get",
        url: rootURL + "/users",
        headers: {
            Authorization: accessToken
        }
    })
}
export const registerUser = async (data) => {
    return apiProcessor(
        {
            method: "post",
            url: rootURL + "/users/register",
            data
        }
    )
}

export const getTransaction = async (data) => {
    const accessToken = localStorage.getItem("accessToken")
    return apiProcessor(
        {
            method: "get",
            url: rootURL + "/transactions",
            data,
            headers: {
                Authorization: accessToken
            }
        }
    )
}
export const deleteTransaction = async (data) => {
    const accessToken = localStorage.getItem("accessToken")
    return apiProcessor(
        {
            method: "delete",
            url: rootURL + "/transactions",
            data,
            headers: {
                Authorization: accessToken
            }
        }
    )
}
export const createTransactionAxios = async (data) => {
    const accessToken = localStorage.getItem("accessToken")
    return apiProcessor(
        {
            method: "post",
            url: rootURL + "/transactions/add",
            data,
            headers: {
                Authorization: accessToken
            }
        }
    )
}