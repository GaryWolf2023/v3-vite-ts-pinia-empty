<template>
  <el-config-provider :locale:string="localLanguage">
    <RouterView/>
  </el-config-provider>
</template>

<script setup lang="ts">
// import { useUserStore } from '@/store/user'
// const userStore = useUserStore()
const localLanguage = 'zhCN'
type localType = 'zhCn' | 'en'
const local = ref<localType>('zhCn')
</script>

<style scoped>

</style>