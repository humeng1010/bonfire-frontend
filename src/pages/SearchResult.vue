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
      <!--      <van-button size="mini">按钮</van-button>-->
    </template>
  </van-card>
  <van-empty v-if="userList.length===0" image="search" description="没有匹配的用户w(ﾟДﾟ)w"/>

</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {searchUsersByTags} from "../api/index.ts";

const route = useRoute()
const {tags} = route.query;
console.log(tags)


const userList = ref([]);

onMounted(() => {
  searchUsersByTags(1, 10, tags).then(res => {
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

</style>