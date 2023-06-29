<template>
  <van-cell-group>
    <van-field v-model="value" autofocus/>
  </van-cell-group>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const common = route.query.common
const value = ref(common);
//根据route.meta.title的值判断应该请求那个后端接口
</script>

<style scoped>

</style>