import { showNotification } from '@mantine/notifications';
import axios, { AxiosError } from 'axios';

export const appAxiosInstance = axios.create();

// Add a response interceptor
appAxiosInstance.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error: AxiosError) => {
    const data = error.response?.data as any;

    if (error.response) {
      console.error('An error occurred:', data);
      showNotification({
        message: data.message,
        title: data.error
      });
    } else if (error.request) {
    } else {
      showNotification({
        message: 'An error occurred while processing your request',
      });
    }
    // Return a rejected promise with the error
    return Promise.reject(error);
  }
);

appAxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
