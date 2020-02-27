import axios from 'axios'
import ConstData from '../common/const_data'

//封装网络请求
export function requestData(config){
 
    const interfaceOfRequest = axios.create({
        baseURL: ConstData.Url_head,
        timeout: 3000,
    })

    //定义拦截器
    //1.请求拦截器的作用
    interfaceOfRequest.interceptors.request.use(config=>{
        console.log("数据访问中",config);
        return config
    }, err=>{
        console.log('request 出错: ', + err)
    })

    //2.响应拦截器
    interfaceOfRequest.interceptors.response.use(res=>{
        console.log("数据访问结束，结果是：",res);
        return res.data
    }, err=>{
        console.log('response 出错: ', + err)
    })


    return interfaceOfRequest(config)
}
