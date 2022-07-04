import axios from "axios";
import qs from "qs";
import { ElMessage } from "element-plus";

axios.defaults.baseURL = import.meta.env.VITE_APP_WEB_URL;
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

// 请求拦截
axios.interceptors.request.use((config) => {
  console.log(config, "请求config-->>");
  return config;
});

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);



//导出===================================》》》》》
export let axiosGet = (url, data = "") => {
  return axios.get(url, { params: data });
};

export let axiosPost = (url, data = "") => {
  return axios.post(url, qs.stringify(data));
};

export let axiosPostJson = (url, data = "") => {
  return axios.post(url, JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
};
