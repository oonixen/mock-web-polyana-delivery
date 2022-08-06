import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

export function getAuthorizationInstance (accessToken: string|null) {
    const axiosInstance: AxiosInstance = axios.create()

    axiosInstance.interceptors.request.use(
        async (config: AxiosRequestConfig) => {

            if (!accessToken) return config

            return {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: `Bearer ${accessToken}`,
                }
            } as AxiosRequestConfig
        }
    )

    axiosInstance.interceptors.response.use(response => response, error => {
        if (401 === error.response.status) return error.response
        else return Promise.reject(error)
    })

    return axiosInstance
}