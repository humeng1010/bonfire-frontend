<template>
  <van-image
      width="100%"
      :src="$route.query.avatarUrl"
      @click="show = true"
  />

  <van-action-sheet
      v-model:show="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @select="onSelect">
    <template #action>
      <form>
        <input style="display: none" name="avatar" type="file" ref="file" @click="uploadHandler"/>
        <div class="upload" @click="uploadHandler">从手机中选择图片</div>
      </form>
    </template>
  </van-action-sheet>
</template>
<script setup>
import {ref} from "vue";
import {uploadAvatar} from "../api/index.ts";
import {showFailToast, showSuccessToast} from "vant";
import {useRouter} from "vue-router";

const file = ref()

const show = ref(false);
const router = useRouter()
const actions = [
  {name: '从手机选择'},
];

const uploadHandler = () => {
  file.value.click()
  const timer = setInterval(() => {
    let file1 = file.value?.files[0];
    if (file1) {

      if (file1.size > 5 * Math.pow(2, 20)) {
        showFailToast('图片大小不能超过5MB！')
        window.clearInterval(timer)

        return
      }
      uploadAvatar({avatar: file.value.files[0]}).then(res => {
        if (res.code === 200) {
          showSuccessToast("更换头像成功")
          router.push("/user")
        } else {
          showFailToast(res.message)
        }
      })
      window.clearInterval(timer)
    }
  }, 1000)
}
const onSelect = (item) => {
  if (item.name === '从手机选择') {
    console.log('从手机选择')
  }
  show.value = false;
};

</script>

<style scoped>
.upload {
  margin: 10px;
}
</style>