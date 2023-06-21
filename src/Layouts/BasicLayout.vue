<template>
  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      v-show="$route.meta.isShow !== 'none'"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>

  <router-view #slot="{ Component }">
    <transition>
      <!--      <keep-alive>-->
      <component :is="Component"/>
      <!--      </keep-alive>-->
    </transition>
  </router-view>

  <van-tabbar @change="onChange" route v-show="$route.meta.isShow !== 'none'">
    <van-tabbar-item icon="home-o" name="index" :to="{name:'home'}" replace>主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team" to="/team" replace>队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user" to="/user" replace>个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import {showToast} from 'vant';
import {useRouter} from "vue-router"

const router = useRouter()


const onClickLeft = () => router.back();
const onClickRight = () => router.push("/search")

const onChange = (index) => showToast(`标签 ${index}`);
</script>

<style scoped>

</style>