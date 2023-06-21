<template>
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="请选择标签"
        @search="onSearch"
        @cancel="onCancel"
        autofocus
    />
  </form>

  <van-divider>已选标签</van-divider>
  <div class="tag">
    <van-tag :show="show" closeable size="medium" type="primary" @close="close">
      标签
    </van-tag>
    <van-tag :show="show" closeable size="medium" type="primary" @close="close">
      标签
    </van-tag>
    <van-tag :show="show" closeable size="medium" type="primary" @close="close">
      标签
    </van-tag>
  </div>
  <van-divider/>

  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />


</template>

<script setup lang="ts">
import {ref} from 'vue';
import {showToast} from 'vant';
import {useRouter} from "vue-router";

const router = useRouter()

const value = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => router.back();

const show = ref(true);
const close = () => {
  show.value = false;
};

const activeIds = ref([1, 2]);
const activeIndex = ref(0);
const tagList = [
  {
    text: '性别',
    children: [
      {text: '男', id: 1},
      {text: '女', id: 2},
    ],
  },
  {
    text: '年级',
    children: [
      {text: '大一', id: 4},
      {text: '大二', id: 5},
      {text: '大三', id: 6},
    ],
  },
  {text: '爱好', disabled: true},
];
</script>

<style scoped>
.tag {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>