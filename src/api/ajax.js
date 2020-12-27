import axios from 'axios';
import qs from 'qs';

// 为给定 ID 的 user 创建请求
axios.interceptors.request.use((config)=>{
  const {method, data} = config;
  if(method.toLocaleLowerCase()==='post'&& typeof data === 'object'){
    config.data = qs.stringify(data); 
  }

  return config;
})
export default axios;