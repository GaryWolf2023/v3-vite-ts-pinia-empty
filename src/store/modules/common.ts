import { defineStore } from 'pinia'
import { getBusinessList } from '@/apis/module/common'
import { businessList } from './type'

export const useCommonStore = defineStore('common', {
    state: () => ({
        businessList:[]
    }),
    actions: {
        async getBusiness() {
            const res = await getBusinessList()
            console.log(res.data);
            this.businessList = res.data
        }
    },
    getters: {
        getBusilist(state):businessList[] {
            return state.businessList
        }
    }
})