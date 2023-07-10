<template>
  <div class="team-me">
    <!--匹配用户-->

    <div class="fire" @click="toMatchPage">
      <van-icon name="fire-o" size="100" color="#ff5544" class="fire-icon"/>
      <van-button round type="primary" size="mini">匹配伙伴</van-button>
    </div>

    <!--  队伍列表 加入和创建的队伍 -->
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="我的队伍" name="1">
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
            <!--  队伍成员信息    -->
            <div class="avatar">
              <span>
              成员
              </span>
              <van-image
                  width="30"
                  height="30"
                  radius="50%"
                  v-for="member in team.members"
                  :src="computedAvatarUrl(member.avatarUrl)"
              />
            </div>

            <van-text-ellipsis v-if="team.expireTime" :content="'队伍失效时间：'+team.expireTime"/>

          </template>
          <template #footer>

            <div class="foot">
              <van-tag plain type="primary">人数：{{ team.currentNum + '/' + team.maxNum }}</van-tag>
              <van-button v-if="currentUserInfo.id===team.userId" size="mini" type="primary"
                          @click="showUpdatePopup(team)">修改队伍
              </van-button>
              <van-button size="mini" type="primary"
                          @click="showMembersPopup(team)">查看成员
              </van-button>
              <van-button v-if="currentUserInfo.id!==team.userId" size="mini" type="primary"
                          @click="quitTeamHandler(team.id)">退出队伍
              </van-button>
              <van-button v-if="currentUserInfo.id===team.userId" size="mini" type="primary"
                          @click="deleteTeamHandler(team.id)">解散队伍
              </van-button>
            </div>
          </template>
        </van-card>
      </van-collapse-item>
      <van-collapse-item title="我的伙伴" name="2">
      </van-collapse-item>

    </van-collapse>
    <!--    修改队伍弹出层-->
    <van-popup
        v-model:show="showUpdate"
        round
        position="bottom"
    >
      <van-form @submit="onSubmit" style="margin-top: 20px;">
        <van-cell-group inset>
          <van-field
              v-model="updateTeamInfo.name"
              name="name"
              label="队伍名称"
              required
              :rules="[{ required: true, message: '请填写队伍名称' }]"
          />

          <van-field name="avatarUrl" label="选择头像">
            <template #input>
              <van-uploader v-model="avatarUrl" :after-read="afterRead" :max-count="1"/>
            </template>
          </van-field>

          <van-field
              v-model="updateTeamInfo.description"
              type="textarea"
              rows="4"
              autosize
              name="description"
              label="队伍描述"
          />
          <van-field name="maxNum" label="队伍人数" required>
            <template #input>
              <van-stepper v-model="updateTeamInfo.maxNum" min="3" max="20"/>
            </template>
          </van-field>

          <!--      状态-->
          <van-field
              v-model="updateTeamInfo.status"
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
              v-if="updateTeamInfo.status === '2'"
              v-model="updateTeamInfo.password"
              type="password"
              name="password"
              label="队伍密码"
              required
              :rules="[{ required: true, message: '请填写队伍密码' }]"
          />
          <!--过期时间-->

          <van-field
              v-model="updateTeamInfo.expireTime"
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
            修改
          </van-button>
        </div>
      </van-form>
    </van-popup>

    <!--    查看队伍成员弹出层-->
    <van-popup
        v-model:show="showMembers"
        round
        position="bottom"
        style="height: 80%;"
    >
      <div class="members">
        <user-card-list :user-list="userList"/>
      </div>
    </van-popup>
  </div>

</template>

<script setup>
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import {
  deleteTeam,
  getCurrentLoginUser,
  getTeamByLoginId,
  quitTeam,
  updateTeam,
  uploadTeamAvatar
} from "../api/index.ts";
import {computedAvatarUrl} from "../hooks/Utils.ts";
import {showConfirmDialog, showFailToast, showSuccessToast, showToast} from "vant";
import UserCardList from '../components/UserCardList.vue'

const activeName = ref('1');
const teamInfo = ref()
const updateTeamInfo = ref()
const router = useRouter()
const avatarUrl = ref([{}
])
const toMatchPage = () => {
  router.push("/match-page")
}
const showUpdate = ref(false);
const showUpdatePopup = (team) => {
  showUpdate.value = true;
  updateTeamInfo.value = JSON.parse(JSON.stringify(team))
  avatarUrl.value[0].url = computedAvatarUrl(updateTeamInfo.value.avatarUrl)
  avatarUrl.value[0].isImage = true
  resUrl.value = updateTeamInfo.value.avatarUrl
};
const showMembers = ref(false)
const userList = ref([])
const showMembersPopup = (team) => {
  showMembers.value = true
  userList.value = team.members
}

const afterRead = (file) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);
  // 获取Base64字符串
  const base64String = file.content;

// 将Base64字符串转换为Blob对象
  const blob = dataURItoBlob(base64String);

// 创建File对象
  const convertedFile = new File([blob], 'avatar.png', {type: 'image/png'});

// 创建FormData对象
  const formData = new FormData();
  formData.append('avatar', convertedFile);

// 发送请求到后端
  uploadTeamAvatar(formData).then(res => {
    if (res.code === 200) {
      resUrl.value = res.data
    } else {
      showFailToast('上传文件异常，请稍后再试')
    }
  })

};

const resUrl = ref('')

// 辅助函数：将Base64字符串转换为Blob对象
function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {type: mimeString});
}

const quitTeamHandler = (teamId) => {
  showConfirmDialog({
    title: '退出队伍？',
    message:
        '您确定要退出该队伍吗？',
  })
      .then(() => {
        // on confirm
        quitTeam({teamId}).then(async res => {
          if (res.code === 200) {
            showToast('退出队伍成功')
            await getTeamInfo()
          }
        })

      })
      .catch(() => {
        // on cancel
      });
}
const deleteTeamHandler = (teamId) => {
  showConfirmDialog({
    title: '解散队伍？',
    message:
        '您确定要解散该队伍吗？',
  })
      .then(() => {
        // on confirm
        deleteTeam(teamId).then(async res => {
          if (res.code === 200) {
            showToast("解散队伍成功")
            await getTeamInfo()
          }
        })
      })
      .catch(() => {
        // on cancel
      });
}

let currentUserInfo = reactive({});


async function getTeamInfo() {
  const res = await getTeamByLoginId()
  if (res.code === 200) {
    teamInfo.value = res.data
  }
  const resLoginUser = await getCurrentLoginUser()
  if (resLoginUser.code === 200) {
    currentUserInfo = resLoginUser.data
  }
}

await getTeamInfo();

const onSubmit = async (values) => {
  values = {...values, id: updateTeamInfo.value.id, avatarUrl: resUrl.value}
  console.log(values)
  const res = await updateTeam(values)
  if (res.code === 200) {
    showUpdate.value = false;
    showSuccessToast('更新队伍信息成功')
    await getTeamInfo();
  } else {
    showFailToast(res.message)

  }
};

const showPicker = ref(false);
const statusColumns = [
  {text: '公开', value: 0},
  {text: '私有', value: 1},
  {text: '加密', value: 2},
];
const onStatusConfirm = ({selectedOptions}) => {
  updateTeamInfo.value.status = selectedOptions[0]?.value;
  showPicker.value = false;
};


// 日期
const showCalendar = ref(false);

const onDateConfirm = (date) => {
  const year = date.getFullYear()
  let monthLess = date.getMonth() + 1;
  const month = monthLess < 10 ? '0' + monthLess : monthLess
  const day = date.getDate()
  updateTeamInfo.value.expireTime = `${year}-${month}-${day}`;
  showCalendar.value = false;
}

</script>

<style scoped>
.fire {
  /*text-align: center;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*background-color: #6cf;*/
  width: 50%;
  margin: 10px auto;

}

.fire-icon {
  animation: shake 2s infinite ease;
  margin-bottom: 10px;
  border-radius: 50%;
}

@keyframes shake {
  0% {
    background-color: #ffb6dd;
    transform: scale(1);
  }
  50% {
    background-color: #ff90cd;
    transform: scale(1.1);
  }
  100% {
    background-color: #ffb6dd;

    transform: scale(1);
  }
}

.foot {
  display: flex;
  justify-content: right;
  align-items: center;
}

.members {
  margin: 20px 0;
}
</style>