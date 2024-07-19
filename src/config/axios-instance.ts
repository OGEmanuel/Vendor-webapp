import axios from 'axios';

export const appAxiosInstance = axios.create();

// Add a response interceptor
appAxiosInstance.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    response,
  (error) => Promise.reject(error)
);
