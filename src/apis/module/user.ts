import request from '@/utils/request'
interface userform {
    username: string,
    password: string,
    business: string
}
export const getToken = (data:userform) => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}