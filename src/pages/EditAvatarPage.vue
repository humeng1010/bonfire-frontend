<template>
  <van-image
      width="100%"
      :src="$route.query.avatarUrl"
      @click="show = true"
  />
  <van-divider>历史头像：</van-divider>

  <van-action-sheet
      v-model:show="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @select="onSelect"/>
</template>
<script setup>
import {ref} from "vue";

const show = ref(false);

const actions = [
  {name: '拍照'},
  {name: '从手机选择'},
  {name: '保存图片'},
];

const onSelect = (item) => {
  if (item.name === '拍照') {
    console.log('拍照')
  }
  if (item.name === '从手机选择') {
    console.log('从手机选择')
  }
  if (item.name === '保存图片') {
    console.log('保存图片')
  }
  show.value = false;
};
</script>

<style scoped>

</style>