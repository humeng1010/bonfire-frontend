<template>
  <user-card-list :user-list="userList">
    <template #title>
      <div class="title">
        最契合的十位小伙伴
      </div>
    </template>
  </user-card-list>
</template>

<script setup>

import UserCardList from "../components/UserCardList.vue";
import {matchUser} from "../api/index.ts";
import {ref} from "vue";

const userList = ref()
matchUser(10).then(res => {
  userList.value = res.data
})


</script>

<style scoped>
.title {
  text-align: center;
  color: var(--van-primary-color);
  background-color: #fff;
}

</style>