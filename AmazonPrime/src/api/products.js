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

export const getProductDetails = id => {
  return axios
    .get(`http://app.verybestusa.com/productmanagement.api/api/products/${id}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
};
