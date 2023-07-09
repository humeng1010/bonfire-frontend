<template>
  <van-form @submit="onSubmit" style="margin-top: 20px;">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="用户名"
          placeholder="用户名"
          required
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="密码"
          required
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
  <div class="info">
    <router-link to="/register">注册</router-link>
  </div>


</template>

<script setup>
import {ref} from "vue";
import {userLogin} from "../api/index";
import {showSuccessToast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter()
const userAccount = ref('');
const userPassword = ref('');

const onSubmit = (values) => {
  userLogin(values).then(res => {
    if (res.code === 200) {
      sessionStorage.setItem('userInfo', JSON.stringify(res.data))
      showSuccessToast('登录成功')
      router.replace("/index")
    }
  })
};


</script>

<style scoped>
a {
  color: var(--van-primary-color);
}

.info {
  text-align: center;
}
</style>