<template>
  <!--  轮播图-->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>匹配组队</van-swipe-item>
    <van-swipe-item>创建房间</van-swipe-item>
    <van-swipe-item>搜索伙伴</van-swipe-item>
  </van-swipe>
  <!--  功能-->
  <van-grid clickable :column-num="2">
    <van-grid-item icon="home-o" text="创建队伍" to="/team-add"/>
    <van-grid-item icon="search" text="搜索伙伴" to="/search"/>
  </van-grid>
  <!--    banner-->
  <!--  <van-grid :border="false" :column-num="3">-->
  <!--    <van-grid-item>-->
  <!--      <van-image-->
  <!--          src=""-->
  <!--      />-->

  <!--    </van-grid-item>-->
  <!--    <van-grid-item>-->
  <!--      <van-image-->
  <!--      />-->
  <!--    </van-grid-item>-->
  <!--    <van-grid-item>-->
  <!--      <van-image-->
  <!--      />-->
  <!--    </van-grid-item>-->
  <!--  </van-grid>-->
  <user-card-list :user-list="userList">
    <template #title>
      <van-dropdown-menu style="margin: 10px;">
        <van-dropdown-item v-model="value1" :options="option1"/>
      </van-dropdown-menu>
    </template>
  </user-card-list>

</template>

<script setup>

import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import {recommendUsers, recommendUsersDistance} from "../api/index.ts";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute()
const {tags} = route.query;
const value1 = ref(0);
const option1 = [
  {text: '根据标签推荐', value: 0},
  {text: '根据距离推荐', value: 1},
];
const userList = ref([]);
const geo = ref({})
watch(value1, (value) => {
  if (value === 0) {
    recommendUsers(1, 10).then(res => {
      userList.value = res.data.records
    })
  } else if (value === 1) {
    navigator.geolocation.getCurrentPosition(res => {
      // console.log(`经度：${res.coords.longitude}、纬度：${res.coords.latitude}`)
      geo.value.longitude = res.coords.longitude
      geo.value.latitude = res.coords.latitude
    })

  }
}, {immediate: true})

watch(geo.value, (value) => {
  console.log()
  recommendUsersDistance(value?.latitude, value?.longitude).then(res => {
    userList.value = res?.data.records
  })
})


</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: var(--van-pink);
  opacity: 0.6;
}

.recommend {
  color: var(--van-primary-color);
  opacity: .8;
  text-align: center;
  margin: 10px;
}

.tips {
  color: var(--van-primary-color);
  opacity: .5;
  text-align: center;
  font-size: 14px;
}
</style>