<template>
  <slot name="title"/>
  <van-card
      v-for="user in userList"
      :desc="user.profile"

      :title="`${user.username}`"
      :thumb="computedAvatarUrl(user.avatarUrl)"
  >
    <template #tag>
      <div v-if="user?.distance">
        <van-tag plain type="primary"
                 style="margin-right: 8px;margin-bottom: 8px">
          {{
            Math.round(user?.distance / 1000) + 'km'
          }}
        </van-tag>
      </div>
    </template>
    <template #tags>
      <div v-if="user.tags">
        <van-tag plain type="primary" v-for="tag in JSON.parse(user?.tags)"
                 style="margin-right: 8px;margin-bottom: 8px">
          {{
            tag
          }}
        </van-tag>
      </div>
    </template>
    <template #footer>
      <van-button type="primary" size="mini" @click="showUserInfo(user)">联系方式</van-button>
      <!--      <van-button size="mini">打招呼</van-button>-->
    </template>
  </van-card>
  <van-empty v-if="userList.length===0" image="search" description="没有匹配的用户w(ﾟДﾟ)w"/>
  <!--    查看用户联系方式 -->
  <van-popup
      v-model:show="showUser"
      round
      position="bottom"
      style="height: 70%;"
  >
    <div class="container">
      <div class="avatar">
        <van-image :src="computedAvatarUrl(currentUser.avatarUrl)" radius="10"/>
      </div>
      <div class="user-info">
        <div class="name">
          <van-icon name="user-o"/>
          ：
          {{ currentUser.username }}
        </div>
        <div class="gender">
          <van-icon name="friends-o"/>
          ：
          <van-tag plain v-if="currentUser.gender===0" type="primary">女</van-tag>
          <van-tag plain v-else-if="currentUser.gender===1" color="#6cf">男</van-tag>
          <van-tag plain v-else color="#666">未知</van-tag>
        </div>
        <div class="phone">
          <van-icon name="phone-circle-o"/>
          ：
          {{ currentUser.phone }}
        </div>
        <div class="email">
          <van-icon name="envelop-o"/>
          ：
          {{ currentUser.email }}
        </div>

      </div>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import {defineProps, ref, withDefaults} from "vue";
import {computedAvatarUrl} from "../hooks/Utils.ts";
import {UserType} from "../models/user";
import {RecommendUsersDistanceRes} from "../api/resultType";

const showUser = ref(false)

interface UserCardListProps {
  userList: UserType[] | RecommendUsersDistanceRes[]
}

// @ts-ignore
withDefaults(defineProps<UserCardListProps>(), {
  userList: [] as UserType[]
})
const currentUser = ref()
const showUserInfo = (user) => {
  console.log(user)
  currentUser.value = user
  showUser.value = true
}


</script>

<style scoped>
.container {
  box-sizing: border-box;
  margin: 20px 40px 10px;
}

.avatar {
  padding: 20px 40px 10px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, .3);
  border-radius: 10px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-top: 20px;
  padding: 10px 60px;
  text-align: center;
  background-color: pink;
  border-radius: 10px;
  line-height: 25px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, .3);
}
</style>