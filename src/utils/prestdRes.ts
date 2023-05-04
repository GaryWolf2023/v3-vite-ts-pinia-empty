import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create({
    baseURL: import.meta.env.VITE_PRESTD_URL,
})

// Request interceptors
service.interceptors.request.use(
   (config) => {
    console.log(import.meta.env.VITE_PRESTD_URL)
    // do something
    return config;
   },
   (error: any) => {
    Promise.reject(error);
   }
);

// Response interceptors
service.interceptors.response.use(
   (res: AxiosResponse) => {
    // do something
    return res;
   },
   (error: any) => {
    // do something
    return Promise.reject(error);
   }
);

export default service;