import axios from 'axios';

export default {
  setupInterceptors: (store) => {
    axios.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        if (error.response.status === 401) {
            window.location.href = '/sign-in';
        }
        return Promise.reject(error);
    });
  }
};