<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username}`"
      :thumb="user.avatarUrl.startsWith('http')?user.avatarUrl:'/api/common/download?name='+user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 8px;margin-bottom: 8px">{{
          tag
        }}
      </van-tag>
    </template>
    <template #footer>
      <van-button type="primary" size="mini">加好友</van-button>
      <!--      <van-button size="mini">打招呼</van-button>-->
    </template>
  </van-card>
  <van-empty v-if="userList.length===0" image="search" description="没有匹配的用户w(ﾟДﾟ)w"/>
</template>

<script setup lang="ts">
import {defineProps, withDefaults} from "vue";
import {UserType} from "../models/user";

interface UserCardListProps {
  userList: UserType[]
}

// @ts-ignore
withDefaults(defineProps<UserCardListProps>(), {
  userList: [] as UserType[]
})


</script>

<style scoped>

</style>