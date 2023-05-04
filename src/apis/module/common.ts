import request from '@/utils/request'

export const getBusinessList = () => {
    return request({
        url: '/public/business/get',
        method: 'get'
    })
}
