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
      height="350"
  />
  <div class="search-btn">
    <van-button type="primary" size="large" @click="doSearchUser">搜索用户</van-button>
  </div>

</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from "vue-router";


const router = useRouter()


const originTagList = [

  {
    text: '编程语言',
    children: [
      {text: 'Python', id: 'Python'},
      {text: 'C', id: 'C'},
      {text: 'C++', id: 'C++'},
      {text: 'Java', id: 'Java'},
      {text: 'C#', id: 'C#'},
      {text: 'JavaScript', id: 'JavaScript'},
      {text: 'SQL', id: 'SQL'},
      {text: 'Go', id: 'Go'},
    ],
  },
  {
    text: '年级',
    children: [
      {text: '大一', id: '大一'},
      {text: '大二', id: '大二'},
      {text: '大三', id: '大三'},
      {text: '大四', id: '大四'},
    ],
  },
  {
    text: '阶段',
    children: [
      {text: '上学', id: '上学'},
      {text: '工作', id: '工作'},
      {text: '离职', id: '离职'},
      {text: '退休', id: '退休'},
    ],
  },
  {
    text: '爱好',
    children: [
      {text: '篮球', id: '篮球'},
      {text: '乒乓球', id: '乒乓球'},
      {text: '羽毛球', id: '羽毛球'},
      {text: '网球', id: '网球'},
      {text: '排球', id: '排球'},
    ]
  },
  {
    text: '状态',
    children: [
      {text: '学习', id: '学习'},
      {text: '休息', id: '休息'},
      {text: '生病', id: '生病'},
      {text: 'coding', id: 'coding'},
      {text: '游戏', id: '游戏'},
      {text: '单身', id: '单身'},
    ]
  },
  {
    text: '性格',
    children: [
      {text: '仔细', id: '仔细'},
      {text: '强迫症', id: '强迫症'},
      {text: '认真', id: '认真'},
      {text: '懒', id: '懒'},
      {text: '躺平', id: '躺平'},
      {text: '奋斗', id: '奋斗'},
    ]
  },
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ]
  },
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

const doSearchUser = () => {
  router.push({
    path: "/search-result",
    query: {
      tags: activeIds.value
    }
  })
}
</script>

<style scoped>
.tag {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.search-btn {
  padding: 0 20px;
}
</style>