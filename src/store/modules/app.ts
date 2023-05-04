import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
    state: () => ({
        showSetting: true,
        showSidebar: true,
        fullScreen: false,
        language: 'cn',
        languageList: ['cn', 'en'],
        loginbcakimgList: [
            'https://s.cn.bing.net/th?id=OHR.CrestedButteEclispe_ZH-CN5715446670_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50',
            'https://s.cn.bing.net/th?id=OHR.MPPUnesco_ZH-CN8076198158_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50',
            'https://s.cn.bing.net/th?id=OHR.ProcidaItaly_ZH-CN7712975930_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50',
            'https://s.cn.bing.net/th?id=OHR.GHOAudubonDay_ZH-CN8605905801_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50'
        ]
    }),
    actions: {
        openSetting() {
            this.showSetting = true
        },
        changeSidebar() {
            this.showSidebar = !this.showSidebar
        },
        changeFullScreen() {
            this.fullScreen = !this.fullScreen
        },
        changeLaguage(language: string) {
            this.language = language
        }
    },
    getters: {}
})