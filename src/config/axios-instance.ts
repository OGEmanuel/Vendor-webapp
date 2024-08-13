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
    console.error('An error occurred:', error);
    if (error.response) {
      showNotification({
        //@ts-expect-error ignore for now
        message: JSON.stringify(error.response.data?.message ?? 'Something went wrong'),
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
