<template>
    <div class="login-box">
        <el-form label-position="right" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
            <el-form-item :label="$t(`login.username`)">
                <el-input v-model="formLabelAlign.name" />
            </el-form-item>
            <el-form-item :label="$t(`login.password`)">
                <el-input v-model="formLabelAlign.region" />
            </el-form-item>
            <el-form-item :label="$t('login.usercode')">
                <el-input v-model="formLabelAlign.type" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary">{{ $t('login.login') }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
const formLabelAlign = reactive({
    name: '',
    region: '',
    type: '',
})
</script>

<style scoped lang="scss">
.login-box {
    height: 100%;
    width: 100%;
    ::v-deep .el-form{
        padding: 50px 10px 10px;
        margin: 20vh auto 0;
    }
}
</style>