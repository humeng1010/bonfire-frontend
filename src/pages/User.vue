<template>
  <div class="user">
    <van-cell-group>
      <van-cell title="头像" center arrow-direction="right"
                :to="{path: '/edit-avatar',query:{id:user.id ,avatarUrl:avatarUrl,editKey:'avatarUrl'}}">
        <template #value>
          <img :src="avatarUrl" alt="" style="height: 48px;">
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="名字" center arrow-direction="right"
                :to="{name: 'edit',params:{title:'设置名字'},query:{id:user.id ,common:user.username,editKey:'username'}}">
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
                :to="{path: '/edit-tags',query:{id:user.id ,tags:user.tags,editKey:'tags'}}">
        <template #value>
          <van-tag plain type="primary" v-for="tag in user.tags">{{ tag }}</van-tag>
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>
      <van-cell title="更多" center arrow-direction="right" :to="{path:'/user-more'}">
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
import {getCurrentLoginUser} from "../api/index.ts";
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

.more {
  margin-top: 10px;
}
</style>