import axiosClient from './axiosClient';
const fruitsApi = {
    getAll(params) {
        const url = '/fruits';
        return axiosClient.get(url, { params });
    },
    get(id) {
        const url = `/fruits/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/fruits';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/fruits/${data.id}`;
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = `/fruits/${id}`;
        return axiosClient.delete(url);
    },
};
export default fruitsApi;
