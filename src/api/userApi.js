import axiosClient from "./axiosClient";

const userApi = {
  getAll(params) {
    const url = "/users";
    return axiosClient.get(url, { params });
  },
  add(data) {
    const url = "/users";
    return axiosClient.post(url, data);
  },
  get(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  login(data) {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
};

export default userApi;
