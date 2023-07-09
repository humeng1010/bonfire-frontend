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
      height="480"
  />


  <div class="search-btn">
    <van-button type="primary" size="large" @click="saveHandler" style="margin: 0 20px;">保存</van-button>
    <van-button type="default" size="large" @click="$router.back()" style="margin: 0 20px;">取消</van-button>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import {updateUserById} from "../api/index.ts";
import {showFailToast, showSuccessToast} from "vant";

const route = useRoute()
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
let tags = route.query.tags
if (!tags) {
  tags = []
}

const activeIds = ref([...tags]);
const activeIndex = ref(0);

const onClose = (tag) => {
  activeIds.value = activeIds.value.filter(activeId => {
    return activeId !== tag
  })
}
const saveHandler = () => {
  const tagsStr = JSON.stringify(activeIds.value)
  updateUserById({id: route.query.id, tags: tagsStr}).then(res => {
    if (res.code === 200) {
      showSuccessToast('修改标签成功')
      router.back()
    } else {
      showFailToast(res.message)
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
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  bottom: 20px;
  width: 100%;
  /*padding: 10px 10px;*/
}
</style>