import axiosClient from './AxiosClient';
const usersApi = {
    getMe(params) {
        const url = '/users';
        return axiosClient.post(url, { params });
    },
};
export default usersApi;
