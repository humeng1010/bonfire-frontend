<template>
  <div class="user">
    <van-cell-group>
      <van-cell title="头像" center arrow-direction="right"
                :to="{path: '/edit-avatar',query:{avatarUrl:user.avatarUrl}}">
        <template #value>
          <img :src="user.avatarUrl" alt="" style="height: 48px;">
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="名字" center arrow-direction="right"
                :to="{name: 'edit',params:{title:'设置名字'},query:{common:user.username}}">
        <template #value>
          {{ user.username }}
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="账号" center arrow-direction="right">
        <template #value>
          {{ user.userAccount }}
        </template>
        <!--        <template #right-icon>-->
        <!--          <van-icon name="arrow" color="#ccc"/>-->
        <!--        </template>-->
      </van-cell>

      <van-cell title="标签" center arrow-direction="right"
                :to="{path: '/edit-tags',query:{tags:user.tags}}">
        <template #value>
          <van-tag plain type="primary" v-for="tag in user.tags">{{ tag }}</van-tag>
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>
      <van-cell title="更多" center arrow-direction="right" :to="{path:'/user-more',query:{...user}}">
        <template #value>
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>
    </van-cell-group>

    <div class="more">
      <van-cell-group>
        <van-cell title="篝火豆" center arrow-direction="right">
          <template #value>
            开发中...
          </template>
          <template #right-icon>
            <van-icon name="arrow" color="#ccc"/>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

  </div>
</template>

<script setup lang="ts">
const user = {
  id: 1,
  username: '小胡',
  userAccount: 'xiaohuaoligei',
  avatarUrl: 'https://img.alicdn.com/bao/uploaded/i1/232692832/O1CN01XERLVq1Wn6Sq5ufB4_!!232692832.jpg_400x400q90',
  gender: '男',
  phone: '111',
  email: '111@11.com',
  userStatus: '正常',
  userRole: 'SVIP',
  tags: ['大一', 'coding', 'java'],
  createTime: '2023-06-01',
}
</script>

<style scoped>
.user {
  margin: 0 0 100px;
}

.more {
  margin-top: 10px;
}
</style>