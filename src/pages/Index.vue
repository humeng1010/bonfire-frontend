<template>
  <!--  轮播图-->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>激情匹配组队</van-swipe-item>
    <van-swipe-item>是兄弟就来看我</van-swipe-item>
    <van-swipe-item>创建房间</van-swipe-item>
    <van-swipe-item>立马开战！</van-swipe-item>
  </van-swipe>
  <!--  功能-->
  <van-grid clickable :column-num="2">
    <van-grid-item icon="home-o" text="创建队伍" to="/"/>
    <van-grid-item icon="search" text="搜索伙伴" to="/search"/>
  </van-grid>
  <!--  banner-->
  <van-grid :border="false" :column-num="3">
    <van-grid-item>
      <van-image
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
          src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
      />
    </van-grid-item>
  </van-grid>
  <!--  -->
  <van-grid :column-num="3">
    <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字"/>
  </van-grid>

</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: var(--van-pink);
  opacity: 0.6;
}
</style>