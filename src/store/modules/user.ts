import { defineStore } from 'pinia'

import { getToken } from '@/apis/module/user'
export const useUserStore = defineStore('user',{
   state: () => ({
      userinfo: {},
      token: '',

   }),
   actions: {
      async login(form: form) {
         let res = await getToken(form)
         console.log(res)
         
      },
   },
   getters: {
      userinfo(state) {
         return state.userinfo
      }
   }
})
type form = {
   username: string,
   password: string,
   business: string
}