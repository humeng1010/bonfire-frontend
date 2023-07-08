<template>
  <div class="team-me">
    <!--匹配用户-->

    <div class="fire" @click="toMatchPage">
      <van-icon name="fire-o" size="100" color="#ff5544" class="fire-icon"/>
      <van-button round type="primary" size="mini">匹配用户</van-button>
    </div>

    <!--  队伍列表-->

    <!-- 个人创建的队伍列表 -->

    <!-- 好友列表 -->

  </div>

</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
const toMatchPage = () => {
  router.push("/")

}


</script>

<style scoped>
.fire {
  /*text-align: center;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*background-color: #6cf;*/
  width: 50%;
  margin: 10px auto;

}

.fire-icon {
  animation: shake 2s infinite ease;
  margin-bottom: 10px;
  border-radius: 50%;
}

@keyframes shake {
  0% {
    background-color: #ffb6dd;
    transform: scale(1);
  }
  50% {
    background-color: #ff90cd;
    transform: scale(1.1);
  }
  100% {
    background-color: #ffb6dd;

    transform: scale(1);
  }
}

</style>