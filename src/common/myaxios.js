// 过滤请求

//  引入 axios 
import axios from "axios"
// 配置公共 url
// process.env.VUE_APP_URL 如果是运行 npm run serve 是从 .env.development 文件中获取
axios.defaults.baseURL = process.env.VUE_APP_URL
// 配置拦截器
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 响应的拦截器
axios.interceptors.response.use(function (response) {
    // 返回返回数据中的 data 
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  // 导出自定义的 axios
  export default axios 
