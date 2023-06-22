<template>
  <div class="user-more">
    <van-cell-group>
      <van-cell title="性别" center>
        <template #value>
          {{ $route.query.gender }}
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="联系电话" center>
        <template #value>
          {{ $route.query.phone }}
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="邮箱" center>
        <template #value>
          {{ $route.query.email }}
        </template>
        <template #right-icon>
          <van-icon name="arrow" color="#ccc"/>
        </template>
      </van-cell>

      <van-cell title="账号状态" center>
        <template #value>
          {{ $route.query.userStatus }}
        </template>
      </van-cell>

      <van-cell title="创建时间" center>
        <template #value>
          {{ $route.query.createTime }}
        </template>
      </van-cell>


    </van-cell-group>
  </div>
</template>

<script>

</script>

<style scoped>
.user-more {
  margin: 0 0 100px;
}
</style>