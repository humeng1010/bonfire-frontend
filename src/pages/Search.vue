<template>
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="请选择标签"
        @search="onSearch"
        @blur="onSearch(value)"
        @cancel="onCancel"
        autofocus
    />
  </form>

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

const value = ref('');

const onSearch = (val) => {
  // 创建 originTagList 的深拷贝副本
  const clonedTagList = JSON.parse(JSON.stringify(originTagList));

  // 对副本进行搜索操作
  // 更新 tagList
  tagList.value = clonedTagList.filter((tag) => {
    if (tag.children) {
      tag.children = tag.children.filter((child) => {
        return child.id.includes(val);
      });
      return tag.children.length > 0;
    }
    return false;
  });

}
const onCancel = () => {
  value.value = ''
  tagList.value = originTagList
}

const activeIds = ref([]);
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