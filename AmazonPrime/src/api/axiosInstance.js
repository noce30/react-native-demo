import axios from "axios";

const instance = axios.create({
  baseURL: "http://app.verybestusa.com/",
  timeout: 1000
});

export default instance;
