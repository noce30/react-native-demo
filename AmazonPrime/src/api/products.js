import axios from "./axiosInstance";

export const getProducts = (payload, callback) => {
  return axios
    .post("productmanagement.api/api/products/queryProduct", payload)
    .then(res => {
      callback(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
