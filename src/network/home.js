import {requestData} from './request'
import ConstData from 'common/const_data'

export function getHomePageData(){
    return requestData({
        url: ConstData.home_url
    })
}

export function getHomeGoods(type, page){
    return requestData({
        url: ConstData.home_goods_url,
        params: {
            type,
            page
        }
    })
}