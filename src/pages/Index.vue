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
  <!--  banner-->
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
      <div class="recommend">
        推荐用户
      </div>
      <div class="tips">
        根据您的个人标签进行推荐
      </div>
    </template>
  </user-card-list>

</template>

<script setup>

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {recommendUsers} from "../api/index.ts";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute()
const {tags} = route.query;


const userList = ref([]);

onMounted(() => {

  recommendUsers(1, 10).then(res => {
    userList.value = res.data.records
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