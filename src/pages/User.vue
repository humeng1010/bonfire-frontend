<template>
  <div class="user">
    <van-cell-group>
      <van-cell title="头像" center arrow-direction="right"
                :to="{path: '/edit-avatar',query:{avatarUrl:user.avatarUrl}}">
        <template #value>
          <img :src="avatarUrl" alt="" style="height: 48px;">
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="名字" center arrow-direction="right"
                :to="{name: 'edit',params:{title:'设置名字'},query:{common:user.username}}">
        <template #value>
          {{ user.username }}
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="账号" center arrow-direction="right">
        <template #value>
          {{ user.userAccount }}
        </template>
        <!--        <template #right-icon>-->
        <!--          <van-icon name="arrow" color="#ccc"/>-->
        <!--        </template>-->
      </van-cell>

      <van-cell title="标签" center arrow-direction="right"
                :to="{path: '/edit-tags',query:{tags:user.tags}}">
        <template #value>
          <van-tag plain type="primary" v-for="tag in user.tags">{{ tag }}</van-tag>
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>
      <van-cell title="更多" center arrow-direction="right" :to="{path:'/user-more',query:{...user}}">
        <template #value>
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>
    </van-cell-group>

    <div class="more">
      <van-cell-group>
        <van-cell title="篝火豆" center arrow-direction="right">
          <template #value>
            开发中...
          </template>
          <template #right-icon>
            <van-icon name="arrow" color="#ccc"/>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

  </div>
</template>

<script setup lang="ts">
import {getCurrentLoginUser} from "../api";
import {computed, onMounted, ref} from "vue";

let user = ref({})

onMounted(() => {
  getCurrentLoginUser().then(res => {
    res.data.tags = JSON.parse(res.data.tags)
    user.value = res.data
  })
})

const avatarUrl = computed(() => {
  return user.value.avatarUrl?.startsWith('http') ?
      user.value.avatarUrl :
      '/api/common/download?name=' + user.value.avatarUrl
})
</script>

<style scoped>
.user {
  margin: 0 0 100px;
}

.more {
  margin-top: 10px;
}
</style>