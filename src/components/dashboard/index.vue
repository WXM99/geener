<template>
  <div style="margin-bottom: 70px">
    <b-container>
      <b-row>
        <b-col cols="12" lg="6" xl="6" sm="12" md="12"
               no-gutters="true"
               v-bind:style="{'padding': '0px'}">
          <div class="cr-van-card">
            <van-row>
              <van-col span="8">
                <div class="avatar-box"
                     v-bind:style="{backgroundImage:'url(' + avatar + ')',
             backgroundRepeat:'no-repeat',
             backgroundSize:'100% 100%'}">
                </div>
              </van-col>
              <van-col span="16">
                <van-panel :title="username" :desc="email">
                  <div>{{ skills }}</div>
                </van-panel>
              </van-col>
            </van-row>
          </div>
        </b-col>
        <b-col cols="12" lg="6" xl="6" sm="12" md="12"
               no-gutters="true"
               v-bind:style="{'padding': '0px'}">
          <div class="cr-van-card">
            <van-divider dashed>Events</van-divider>
            <van-cell value="more" is-link to="/events/list">
              <template #title>
                <span class="custom-title">liked</span>
                <van-tag color="#f2826a" plain>{{ waitingQs }}</van-tag>
              </template>
            </van-cell>
            <van-cell value="more" is-link to="/events/list">
              <template #title>
                <span class="custom-title">matched</span>
                <van-tag color="#f2826a" plain>{{ submitQs }}</van-tag>
              </template>
            </van-cell>
            <van-cell value="more" is-link to="/events/list">
              <template #title>
                <span class="custom-title">participated</span>
                <van-tag color="#f2826a" plain>{{ reviewedQs }}</van-tag>
              </template>
            </van-cell>
          </div>
        </b-col>
        <b-col cols="12" lg="6" xl="6" sm="12" md="12"
               no-gutters="true"
               v-bind:style="{'padding': '0px'}">
          <div class="cr-van-card">
            <van-divider dashed>My interest</van-divider>
            <van-cell value="more" is-link>
              <template #title>
                <span class="custom-title">liked</span>
              </template>
            </van-cell>
            <van-cell value="more" is-link>
              <template #title>
                <span class="custom-title">viewed</span>
              </template>
            </van-cell>
            <van-cell value="more" is-link>
              <template #title>
                <span class="custom-title">matched</span>
              </template>
            </van-cell>
          </div>
        </b-col>
        <b-col cols="12" lg="12" xl="12" sm="12" md="12"
               no-gutters="true"
               v-bind:style="{'padding': '0px'}">
          <div class="cr-van-card">
            <van-button block color="#8ba38d" @click="logOut">
              Log Out
            </van-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import router from "@/router";
import store from "../../main";

export default {
  data() {
    return {
      avatar: require("@/assets/avatar.png"),
      username: 'XiaomiaoW',
      email: 'Xiaomiao.W@hotmail.com',
      skills: 'I like Greener App!',
      waitingQs: 2,
      submitQs: 1,
      reviewedQs: 0
    };
  },
  mounted() {
    if (!store.login) {
      router.push("/login")
    } else {
      this.username = store.username
    }
  },
  methods: {
    logOut() {
      store.login = false
      router.push("/login")
    }
  }
};
</script>


<style scoped>

.avatar-box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px;
  overflow: hidden;
  border: 5px solid #fff;
  box-shadow: 0px 0px 5px #aaa;
}

.van-cell__title {
  font-size: 20px;
}

.van-panel {
  margin: 20px;
  margin-top: 30px;
}

.van-tag {
  margin-left: 5px;
  transform: translate(0px, -2px);
}

.custom-title {
  font-size: 16px;
  text-align: left;
  color: #7f8182;
}

.van-cell__title {
  text-align: left;
}
</style>
