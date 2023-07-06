<template>
  <!--    搜索-->
  <van-search v-model="searchText" placeholder="请输入搜索队伍关键词"/>
  <van-dropdown-menu ref="menuRef">
    <van-dropdown-item v-model="status" :options="options" @close="onConfirm"/>
  </van-dropdown-menu>

  <van-card
      v-for="team in teamInfo"
      :desc="team.description"
      :title="team.name"
      :thumb="team.createUser.avatarUrl.startsWith('http')?
      team.createUser.avatarUrl:
      '/api/common/download?name='+team.createUser.avatarUrl"
  >
    <template #tag>
      <van-tag mark plain type="primary" v-if="team.status===0">公开</van-tag>
      <van-tag mark plain type="primary" v-if="team.status===1">私密</van-tag>
      <van-tag mark plain type="primary" v-if="team.status===2">加密</van-tag>
    </template>
    <template #tags>
      <!--  队伍创建者信息    -->
      <van-text-ellipsis :content="'创建者：'+team.createUser.username"/>
      <van-tag plain type="primary" v-for="tag in JSON.parse(team.createUser.tags)"
               style="margin-right: 8px;margin-bottom: 8px">{{
          tag
        }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini" type="primary">加入队伍</van-button>
    </template>
  </van-card>

</template>

<script setup>
import {getListTeam} from "../api/index.ts"
import {onMounted, ref, watch} from "vue";

const teamInfo = ref([])
const searchText = ref("")

watch(searchText, (newVal, oldVal) => {
  getListTeam({searchText: newVal, status: status.value}).then(res => {
    teamInfo.value = res.data
  })
})
//状态 0 公开； 1 私密； 2 加密
const status = ref(3)

onMounted(() => {
  getListTeam().then(res => {
    teamInfo.value = res.data
  })
})


const menuRef = ref(null);
// const value = ref(0);
const options = [
  {text: '全部', value: 3},
  {text: '公开', value: 0},
  {text: '加密', value: 2},
];
const onConfirm = () => {
  console.log(status.value)
  getListTeam({status: status.value, searchText: searchText.value}).then(res => {
    teamInfo.value = res.data
  })
};

</script>

<style scoped>

</style>