import axiosClient from './axiosClient';
const fruitPresentsApi = {
    getAll(params) {
        const url = '/fruitPresents';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/fruitPresents/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/fruitPresents';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/fruitPresents/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/fruitPresents/${id}`;
        return axiosClient.delete(url);
    },
};
export default fruitPresentsApi;
