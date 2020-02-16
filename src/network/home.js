import {requestData} from './request'
import ConstData from 'common/const_data'

export function getHomePageData(){
    return requestData({
        url: ConstData.home_url
    })
}