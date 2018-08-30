import axios from 'axios';
import qs from 'qs';
import router from '../router/index'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
   return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

function checkStatus (response) {
  if (response && ((response.status === 200 || response.status === 304 || response.status === 400))) {
    return response.data
  }
  return {
    code: '404',
    message: '网络异常'
  }
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: 'https://549673720948957-shlef.alibiaojia.com/',
      url: url,
      data: qs.stringify(data),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accessToken': window.localStorage.getItem('sbtoken')==null?'': window.localStorage.getItem('sbtoken').replace("\"","").replace("\"","")
      },
      timeout: 10000
    }).then((res) => {
      return checkStatus(res)
    }).catch(err => {
      if(err.response.data.code==401){
        router.push('/login');
        return false;
      }
      alert(err.response.data.message)
    });
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: 'https://549673720948957-shlef.alibiaojia.com/',
      url,
      params,
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'accessToken': window.localStorage.getItem('sbtoken')==null?'': window.localStorage.getItem('sbtoken').replace("\"","").replace("\"","")
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).catch(err => {
      if(err.response.data.code==401){
        router.push('/login');
        return false;
      }
      alert(err.response.data.message)
    });
  }
}
