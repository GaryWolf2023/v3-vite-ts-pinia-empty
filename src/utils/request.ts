import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create({
   baseURL: import.meta.env.VITE_BASE_URL,
   timeout: 5000,
});

// Request interceptors
service.interceptors.request.use(
   (config) => {
    // do something
    return config;
   },
   (error: any) => {
    Promise.reject(error);
   }
)

// Response interceptors
service.interceptors.response.use(
   (res: AxiosResponse) => {
      // do something
      // console.log(res)
      if (res.status === 200) {
         return res.data;
      } else {
         return Promise.reject(res.data);
      }
   },
   (error: any) => {
      return Promise.reject(error);
   }
)

export default service;