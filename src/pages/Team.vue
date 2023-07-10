<template>
  <!--    搜索-->
  <van-search v-model="searchText" placeholder="请输入搜索队伍关键词"/>
  <van-dropdown-menu ref="menuRef">
    <van-dropdown-item v-model="status" :options="options" @close="onConfirm"/>
  </van-dropdown-menu>

  <van-card
      v-for="team in teamInfo"
      :key="team.id"
      :desc="team.description"
      :title="team.name"
      :thumb="computedAvatarUrl(team.avatarUrl)"
  >
    <template #tag>
      <van-tag mark plain type="primary" v-if="team.status===0">公开</van-tag>
      <van-tag mark plain type="primary" v-if="team.status===1">私密</van-tag>
      <van-tag mark plain type="primary" v-if="team.status===2">加密</van-tag>

    </template>
    <template #tags>
      <!--  队伍创建者信息    -->
      <div class="avatar">
        <span>
        队长：
        </span>
        <van-image
            width="30"
            height="30"
            radius="50%"
            :src="computedAvatarUrl(team.createUser.avatarUrl)"
        />
        <van-text-ellipsis :content="'昵称：'+team.createUser.username"/>
      </div>
      性别：
      <van-tag plain v-if="team.createUser.gender===0" type="primary">女</van-tag>
      <van-tag plain v-if="team.createUser.gender===1" color="#6cf">男</van-tag>
      <van-text-ellipsis v-if="team.expireTime" :content="'队伍失效时间：'+team.expireTime"/>
      <van-text-ellipsis v-else :content="'队伍失效时间：永不失效'"/>


      <van-tag plain type="primary" v-for="tag in JSON.parse(team.createUser.tags)"
               style="margin-right: 2px;margin-bottom: 2px">{{
          tag
        }}

      </van-tag>
    </template>
    <template #footer>

      <div class="foot">
        <van-tag plain type="primary">人数：{{ team.currentNum + '/' + team.maxNum }}</van-tag>

        <van-button v-if="currentUserInfo.id!==team.createUser.id" size="mini" type="primary"
                    :disabled="team.currentNum===team.maxNum" @click="joinTeamHandler(team.id,team.status)">加入队伍
        </van-button>

      </div>
    </template>
  </van-card>

  <van-popup
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '80%' }"
  >
    <div class="tips">
      请输入队伍密码
    </div>
    <div class="inputArea">
      <!-- 密码输入框 -->
      <van-password-input
          :value="password"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
          v-model="password"
          :show="showKeyboard"
          @blur="showKeyboard = false"
      />
    </div>
    <div class="join">
      <van-button type="primary" block @click="joinEncryptTeam">加入队伍</van-button>
    </div>
  </van-popup>
</template>

<script setup>
import {getCurrentLoginUser, getListTeam, joinTeam} from "../api/index.ts"
import {onMounted, reactive, ref, watch} from "vue";

import {computedAvatarUrl} from "../hooks/Utils.ts";
import {showToast} from "vant";

const password = ref('');
const showKeyboard = ref(true);
const show = ref(false);
const teamInfo = ref([])
const searchText = ref("")
let currentUserInfo = reactive({});
watch(searchText, (newVal, oldVal) => {
  getListTeam({searchText: newVal, status: status.value}).then(res => {
    teamInfo.value = res.data
  })
})
//状态 0 公开； 1 私密； 2 加密
const status = ref(null)

onMounted(async () => {
  getListTeam().then(res => {
    teamInfo.value = res.data
  })
  let userInfoJSON = sessionStorage.getItem('userInfo')
  if (!userInfoJSON) {
    const res = await getCurrentLoginUser()
    if (res.code === 200) {
      sessionStorage.setItem('userInfo', JSON.stringify(res.data))
      userInfoJSON = sessionStorage.getItem('userInfo')
    }
  }
  currentUserInfo = JSON.parse(userInfoJSON)
})
const joinTeamId = ref()

const joinEncryptTeam = () => {
  joinTeam({teamId: joinTeamId.value, password: password.value}).then(res => {
    if (res.code === 200) {
      showToast("加入队伍成功：" + res.message)
      getListTeam().then(res => {
        teamInfo.value = res.data
      })
      show.value = false
    } else {
      showToast(res.message)
    }
  })
}
const joinTeamHandler = (teamId, teamStatus) => {
  if (teamStatus === 2) {
    //  需要输入密码
    show.value = true
    joinTeamId.value = teamId
    return
  }
  joinTeam({teamId}).then(res => {
    if (res.code === 200) {
      showToast("加入队伍成功：" + res.message)
      getListTeam().then(res => {
        teamInfo.value = res.data
      })
    } else {
      showToast(res.message)
    }

  })
}


const menuRef = ref(null);
// const value = ref(0);
const options = [
  {text: '全部', value: null},
  {text: '公开', value: 0},
  {text: '加密', value: 2},
];
const onConfirm = () => {
  console.log(status.value)
  getListTeam({status: status.value, searchText: searchText.value}).then(res => {
    teamInfo.value = res.data
  })
};

</script>

<style scoped>
.foot {
  display: flex;
  justify-content: right;
  align-items: center;
}

.tips {
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  color: var(--van-primary-color);
}

.inputArea {
  margin: 50px 0;
}

.join {
  margin: 0 20px;
}
</style>