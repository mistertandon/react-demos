import React from 'react';
import axios from 'axios';

const instance = axios.create(
    {
        baseUrl: 'https://picsum.photos/'
    }
);

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use(
    (request) => {

        console.log('instance.interceptors.request: Success');
        console.log(request);

        return request
    },
    (error) => {

        console.log('instance.interceptors.request: Error');
        console.log(error);

        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {

        console.log('instance.interceptors.response: Success');
        console.log(response);

        return response;
    },
    (error) => {

        console.log('instance.interceptors.response: Error');
        console.log(error);

        return Promise.reject(error);
    },
);

export default instance;