<template>
  <!--  轮播图-->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>激情匹配组队</van-swipe-item>
    <van-swipe-item>是兄弟就来看我</van-swipe-item>
    <van-swipe-item>创建房间</van-swipe-item>
    <van-swipe-item>立马开战！</van-swipe-item>
  </van-swipe>
  <!--  功能-->
  <van-grid clickable :column-num="2">
    <van-grid-item icon="home-o" text="创建队伍" to="/"/>
    <van-grid-item icon="search" text="搜索伙伴" to="/search"/>
  </van-grid>
  <!--  banner-->
  <van-grid :border="false" :column-num="3">
    <van-grid-item>
      <van-image
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
      />
    </van-grid-item>
  </van-grid>
  <user-card-list :user-list="userList"/>

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
    //处理tags的JSON转为对象
    res.data.records = res.data.records.map(record => {
      record.tags = JSON.parse(record.tags)
      return record
    })
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

</style>