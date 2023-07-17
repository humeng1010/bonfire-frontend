<template>
  <van-nav-bar
      :title="$route.meta.title||$route.params.title"
      fixed
  >
    <template #left>
      <van-icon name="arrow-left" @click="onClickLeft" v-if="$route.meta.title !== '登录'"/>
    </template>
    <template #right>
      <van-icon name="search" size="18" v-if="$route.meta.isShow !== 'none'" @click="$router.push('/search')"/>
      <van-icon style="margin-left: 10px" name="add-o" size="18" v-if="$route.meta.showAddTeam"
                @click="$router.push('/team-add')"/>
    </template>
  </van-nav-bar>
  <div class="content">
    <Suspense>
      <router-view #slot="{ Component }">
        <transition>
          <component :is="Component"/>
        </transition>
      </router-view>
    </Suspense>
  </div>

  <van-tabbar route v-show="$route.meta.isShow !== 'none'">
    <van-tabbar-item icon="home-o" name="index" :to="{name:'home'}" replace>主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team" to="/team" replace>队伍</van-tabbar-item>
    <van-tabbar-item icon="fire-o" name="team-me" to="/team-me" replace>篝火</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user" to="/user" replace>个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"

const router = useRouter()


const onClickLeft = () => router.back();

</script>

<style scoped>
.content {
  padding-top: 46px;
  padding-bottom: 52px;
}
</style>