<template>
  <div class="user-more">
    <van-cell-group>
      <van-cell title="性别" center
                :to="{name: 'edit',params:{title:'设置性别'},
                query:{
                  id:user.id,
                  common:user.gender,
                  editKey:'gender'}
                }">
        <template #value>
          {{ showGender }}
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="联系电话" center
                :to="{name: 'edit',params:{title:'修改电话'},
                query:{
                  id:user.id,
                  common:user.phone,
                  editKey:'phone'}
                }">
        <template #value>
          {{ user.phone }}
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="邮箱" center
                :to="{name: 'edit',params:{title:'修改邮箱'},
                query:{
                  id:user.id,
                  common:user.email,
                  editKey:'email'}
                }">
        <template #value>
          {{ user.email }}
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="账号状态" center>
        <template #value>
          {{ user.userStatus === 0 ? '正常' : '异常' }}
        </template>
      </van-cell>

      <van-cell title="创建时间" center>
        <template #value>
          {{ user.createTime }}
        </template>
      </van-cell>


    </van-cell-group>
    <van-cell-group style=" margin: 20px 20px 0;">
      <van-button text="退出登录" type="default" size="" block center @click="logout"/>
    </van-cell-group>
  </div>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import {getCurrentLoginUser, userOutLogin} from "../api/index.ts"
import {showSuccessToast} from "vant";
import router from "../router/index.ts";

let user = ref({})

onMounted(() => {
  getCurrentLoginUser().then(res => {
    res.data.tags = JSON.parse(res.data.tags)
    user.value = res.data
  })
})

const showGender = computed(() => {
  if (user.value?.gender === 0) {
    return '女'
  }
  if (user.value?.gender === 1) {
    return '男'
  }
  return '未知'
})

const logout = () => {
  userOutLogin().then(res => {
    if (res.code === 200) {
      showSuccessToast("退出成功")
      router.push("/login")
    }
  })
}
</script>

<style scoped>
.user-more {
  margin: 0 0 100px;
}
</style>