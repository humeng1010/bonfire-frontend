<template>
  <user-card-list :user-list="userList"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {searchUsersByTags} from "../api/index.ts";
import UserCardList from "../components/UserCardList.vue";

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
    userList.value = res?.data.records
  })


})
</script>

<style scoped>

</style>