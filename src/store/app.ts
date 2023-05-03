import { defineStore } from 'pinia'

// type App = {
//     showSetting?: Ref(boolean)
//     showSidebar?: boolean
//     fullScreen?: boolean
//     language?: string
// }

export const useAppStore = defineStore('app',() => {
    const showSetting = ref(true)
    const showSidebar = ref(true)
    const fullScreen = ref(false)
    const language = ref('cn')
    const openSetting = () :void => {
        showSetting.value = true
    }
    const changeFullScreen = () :void => {
        fullScreen.value = !fullScreen.value
    }
    const changeLaguage = (language:string) :void => {
        language = language
    }
    const changeSidebar = () :void => {
        showSidebar.value = !showSidebar.value
    }
    return {
      showSetting,
      showSidebar,
      fullScreen,
      language,
      changeFullScreen,
      openSetting,
      changeLaguage,
      changeSidebar
    }
})