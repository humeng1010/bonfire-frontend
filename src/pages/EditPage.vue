<template>
  <div class="right">
    <van-button text="确认" type="primary" size="mini" v-if="$route.meta.edit === true"
                @click="update"/>
  </div>
  <van-cell-group>
    <van-field v-model="value" autofocus/>
  </van-cell-group>
</template>

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {updateUserById} from "../api/index.ts";
import {showFailToast, showSuccessToast} from "vant";

const route = useRoute()
const router = useRouter()
let common = route.query.common

const value = ref(common);

const update = () => {
  const key = route.query.editKey

  updateUserById({id: route.query.id, [key]: value.value}).then(res => {
    if (res.code === 200) {
      router.back()
      showSuccessToast('修改成功');

    } else {
      showFailToast('修改失败');
    }
  })


}
</script>

<style scoped>
.right {
  position: absolute;
  top: 2vw;
  right: 3vw;
  z-index: 99;
}

</style>