<template>
  <van-nav-bar
      :title="$route.meta.title||$route.params.title"
      left-arrow
      @click-left="onClickLeft"

  >
    <template #right>
      <van-icon name="search" size="18" v-if="$route.meta.isShow !== 'none'" @click="$router.push('/search')"/>
    </template>
  </van-nav-bar>

  <router-view #slot="{ Component }">
    <transition>
      <!--      <keep-alive>-->
      <component :is="Component"/>
      <!--      </keep-alive>-->
    </transition>
  </router-view>

  <van-tabbar route v-show="$route.meta.isShow !== 'none'">
    <van-tabbar-item icon="home-o" name="index" :to="{name:'home'}" replace>主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team" to="/team" replace>队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user" to="/user" replace>个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"

const router = useRouter()


const onClickLeft = () => router.back();


</script>

<style scoped>

</style>