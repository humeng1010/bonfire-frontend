<template>
  <van-form @submit="onSubmit" style="margin-top: 20px;">
    <van-cell-group inset>
      <van-field
          v-model="team.name"
          name="name"
          label="队伍名称"
          required
          :rules="[{ required: true, message: '请填写队伍名称' }]"
      />
      <van-field
          v-model="team.description"
          type="textarea"
          rows="4"
          autosize
          name="description"
          label="队伍描述"
      />
      <van-field name="maxNum" label="队伍人数" required>
        <template #input>
          <van-stepper v-model="team.maxNum" min="3" max="20"/>
        </template>
      </van-field>

      <!--      状态-->
      <van-field
          v-model="team.status"
          is-link
          readonly
          name="status"
          label="队伍状态"
          placeholder="点击选择队伍状态"
          @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker
            :columns="statusColumns"
            @confirm="onStatusConfirm"
            @cancel="showPicker = false"
        />
      </van-popup>
      <!--      password-->
      <van-field
          v-if="team.status === '2'"
          v-model="team.password"
          type="password"
          name="password"
          label="队伍密码"
          required
          :rules="[{ required: true, message: '请填写队伍密码' }]"
      />
      <!--过期时间-->

      <van-field
          v-model="team.expireTime"
          is-link
          readonly
          name="expireTime"
          label="选择过期时间"
          placeholder="选择过期时间"
          @click="showCalendar = true"
      />
      <van-calendar v-model:show="showCalendar" @confirm="onDateConfirm"/>


    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        创建
      </van-button>
    </div>
  </van-form>


</template>

<script setup>
import {reactive, ref} from 'vue';
import {addTeam} from "../api/index.ts";
import {showFailToast, showSuccessToast} from "vant";
import {useRouter} from "vue-router";


const router = useRouter()
const team = reactive({
  "name": "",
  "description": "",
  "maxNum": 3,
  "status": 0,
  "password": "",
  "expireTime": "",
})


const onSubmit = (values) => {
  console.log('submit', values);

  addTeam(values).then(res => {
    console.log(res)
    if (res.code === 200) {
      showSuccessToast('创建队伍成功');
      router.push('/team')
    } else {
      showFailToast('创建队伍失败:' + res.message)
    }
  })
};

const showPicker = ref(false);
const statusColumns = [
  {text: '公开', value: 0},
  {text: '私有', value: 1},
  {text: '加密', value: 2},
];
const onStatusConfirm = ({selectedOptions}) => {
  team.status = selectedOptions[0]?.value;
  showPicker.value = false;
};


// 日期
const showCalendar = ref(false);

const onDateConfirm = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  team.expireTime = `${year}-${month}-${day}`;
  showCalendar.value = false;
}

</script>

<style scoped>

</style>