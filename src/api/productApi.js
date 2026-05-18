import axiosClient from "./axiosClient";

const productApi = {
  getAll(params) {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getByCategory(category, params){
    const url = `/products/category/${category}`;
    return axiosClient.get(url, { params });
  },
  add(data) {
    const url = "/products";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
