import axios from 'axios';

// loading
// let loading;

// 超时时间
axios.defaults.timeout = 5000;

// axios.defaults.baseURL = 'http://localhost:8080/';

// 请求拦截器
axios.interceptors.request.use((config) => {
  // loading = this.$message.loading('加载中...', 0);
  return config;
}, function(error) {
  // loading.destroy();
  return Promise.reject(error);
});
// 响应拦截器
axios.interceptors.response.use((response) => {
  // loading.destroy();
  return response;
}, function(error) {
  // loading.destroy();
  // this.$message.error('请求失败');
  if (error.response) {
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    console.log(error.response.data);
    console.log(`${error.response.status},${codeMessage[error.response.status]}`);
    console.log(error.response.headers);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
  return Promise.reject(error);
});

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 封装axios的post请求

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, type) {
  const options = {
    method: type || 'GET',
    url: url,
    data: {},
  };
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions,
    ...options,
  };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }

  return new Promise((resolve, reject) => {
    axios(newOptions)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
