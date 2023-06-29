<template>

  <van-divider>已选标签</van-divider>

  <div v-if="activeIds.length === 0" style="color: #666;padding:0 20px">请选择标签</div>

  <van-row gutter="16" style="padding: 0 16px">
    <van-col v-for="tag in activeIds">
      <van-tag size="large" plain type="primary" closeable @close="onClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider/>

  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />


</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRoute} from "vue-router";

const route = useRoute()

const originTagList = [
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '年级',
    children: [
      {text: '大一', id: '大一'},
      {text: '大二', id: '大二'},
      {text: '大三', id: '大三'},
    ],
  },
  {text: '爱好', disabled: true},
];

let tagList = ref(originTagList);

const activeIds = ref([...route.query.tags]);
const activeIndex = ref(0);

const onClose = (tag) => {
  activeIds.value = activeIds.value.filter(activeId => {
    return activeId !== tag
  })
}

</script>

<style scoped>
.tag {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>