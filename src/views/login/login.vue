<template>
    <div class="login-box">
        <div class="image-loop">
            <el-carousel
              trigger="hover"
              height="100%"
              :interval="2000"
              :autoplay="true"
              arrow="never"
              :loop="true"
            >
            <el-carousel-item v-for="item in imageList" :key="item">
              <img
                :src="item"
                alt=""
                :style="{width: '100%', height: '100%', objectFit: 'cover'}"
              >
              </el-carousel-item>
            </el-carousel>
        </div>
        <div class="func-list">

        </div>
        <el-form label-position="right" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
            <el-form-item :label="$t(`login.username`)">
                <el-input v-model="formLabelAlign.username" />
            </el-form-item>
            <el-form-item :label="$t(`login.password`)">
                <el-input v-model="formLabelAlign.password" />
            </el-form-item>
            <el-form-item :label="$t('login.usercode')">
                <el-cascader
                    v-model="formLabelAlign.business"
                    placeholder="请选择"
                    :options="businessList"
                    @change="handleChange"
                    clearable
                    :show-all-levels="false"

                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :style="{width:'100%'}" @click="login">{{ $t('login.login') }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/modules/app'
import { useCommonStore } from '@/store/modules/common'
import {useUserStore} from '@/store/modules/user'
const appStore = storeToRefs(useAppStore())
const commonStore = useCommonStore()
const userStore = useUserStore()
onBeforeMount (() => {
	commonStore.getBusiness()
})
const formLabelAlign = reactive({
    username: '',
    password: '',
    business: '',
})
const imageList = appStore.loginbcakimgList
const businessList = computed(() => {
    console.log(commonStore.getBusilist);
    return commonStore.getBusilist
})
const handleChange = (val: any) => {
    console.log(val)
}
const login = () => {
    formLabelAlign.business = formLabelAlign.business[formLabelAlign.business.length - 1]
    userStore.login(formLabelAlign)
}
</script>

<style scoped lang="scss">
.login-box {
    height: 100%;
    width: 100%;
    position: relative;
    .image-loop {
        height: 100%;
        width: 100%;
        .el-carousel {
          height: 100%;
          width: 100%;
          .el-carousel__container {
            height: 100%;
            width: 100%;
            .el-carousel__item {
              height: 100%;
              width: 100%;
              background-size: 1920px 1080px;
              background-repeat: no-repeat;
              background-position: 50% 50%;
            }
          }
        }
    }
    .func-list {
        position: absolute;
        top: 0;
        right: 0;
        height: 60px;
    }
    :deep(.el-form){
        position: absolute;
        top: calc(30%);
        right: 10%;
        padding: 50px 100px 50px 10px;
        border-radius: 20px;
        border: 1px solid #ccc;
        background-color: rgba(255, 255, 255, 0.479);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .el-form-item{
            
        }
    }
}
</style>