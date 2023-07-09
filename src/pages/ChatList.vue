<template>
  <van-cell-group>
    <van-cell title="momo" value="昨天" label="hello" v-for="_ in 3">
      <template #icon>
        <van-image
            class="image"
            width="46"
            src="https://img.alicdn.com/bao/uploaded/i1/232692832/O1CN01XERLVq1Wn6Sq5ufB4_!!232692832.jpg_400x400q90"
        />
      </template>
    </van-cell>
  </van-cell-group>
</template>

<script>
export default {
  name: "ChatList"
}
</script>

<style scoped>
.image {
  margin-right: 10px;
}

</style>