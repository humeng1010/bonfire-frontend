import axios from "axios";
import router from "../router";

const request = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
});


// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code === 40100) {
        //跳转到登录页面

        router.replace('/login')
    }
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    router.replace('/login')
    return Promise.reject(error);
});

export default request