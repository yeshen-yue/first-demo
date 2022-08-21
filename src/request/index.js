import Vue from 'vue'
import qs from 'qs'
import ElementUI from 'element-ui';
import { Loading } from 'element-ui'
import axios from 'axios';
Vue.use(ElementUI)
var loading, instance, host;
if (process.env.NODE_ENV == "development") {
    host = "http://www.bufantec.com"
} else {
    host = "http://www.bufantec.com"
}
instance = axios.create({
    baseURL: host,
    timeout: 5000,
});
instance.interceptors.request.use(config => {
    if (config.method.toLowerCase() == 'post') {
        config.data = qs.stringify(config.data);
    }
    loading = Loading.service({
        lock: true,
        text: '努力加载中....',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    return config;
}, err => {
    return Promise.reject(err);
});
instance.interceptors.response.use(res => {
    loading.close();
    return res;
}, err => {
    loading.close();
    return Promise.reject(err);
});
function requset(url, method, data) {
    return instance({
        url, method, [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    })
}
export default requset;