<template>
  <van-form @submit="onSubmit" style="margin-top: 20px;">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="用户名"
          placeholder="用户名"
          required
          :rules="[{ validator:accountRule, message: '用户名不能少于4位' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="密码"
          required
          :rules="[{ required: true, validator:passwordRule, message: '密码长度必须大于8' }]"
      />
      <van-field
          v-model="checkPassword"
          type="password"
          name="checkPassword"
          label="确认密码"
          placeholder="再次输入密码"
          required
          :rules="[{ required: true,validator:checkPasswordRule, message: '密码长度必须大于8并且两次输入的密码必须一致' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>
  <div class="info">
    <router-link to="/login">去登录</router-link>
  </div>

</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {userRegister} from "../api/index.ts";
import {showFailToast, showSuccessToast} from "vant";

const router = useRouter()
const userAccount = ref('');
const userPassword = ref('');
const checkPassword = ref('')
const accountRule = (val) => {
  if (val.length < 4) {
    return false
  }
}
const firstPassword = ref()
const passwordRule = (val) => {
  if (val.length < 8) {
    return false
  }
  firstPassword.value = val
}
const checkPasswordRule = (val) => {
  if (val.length < 8) {
    return false
  }
  if (val !== firstPassword.value) {
    return false
  }
}
const onSubmit = async (values) => {
  console.log(values)
  const res = await userRegister(values)
  if (res.code === 200) {
    showSuccessToast('注册成功')
    router.push("/login")
  } else {
    showFailToast(res.message)
  }
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