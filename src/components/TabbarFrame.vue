<template>
  <div>
    <router-view/>
    <van-popup closeable v-model="showMsg" round position="top" :style="{ height: '70px' }">
      <div class="pop-message">{{this.message}}</div>
    </van-popup>
    <van-popup closeable v-model="showPop" round position="top" :style="{ height: '90%' }">
      <div class="pop-message">
        <van-cell-group inset>
          <van-field
              v-model="eventName"
              :rules="[{ required: true, message: 'Please fill event name' }]"
              label="Event Name"
              name="Event Name"
              placeholder="Event Name"
          />
          <van-field
              v-model="eventDesc"
              :rules="[{ required: true, message: 'Please fill event desc' }]"
              label="Event Desc"
              name="Event Desc"
              placeholder="Event Desc"
          />
        </van-cell-group>
        <div class="cr-van-card">
          <van-button block color="#8ba38d" @click="submit()">
            Submit
          </van-button>
        </div>
      </div>
    </van-popup>
    <van-tabbar route active-color="#afbc90" inactive-color="#7f8182">
      <van-tabbar-item replace icon="add-o" @click="showPopup">New</van-tabbar-item>
      <van-tabbar-item replace to="/events" icon="fire-o">Match</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="user-circle-o">Me</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgNum: 0,
      showPop: false,
      showMsg: false,
      message: 'Upload Successfully',
      eventName: '',
      eventDesc: ''
    };
  },
  methods: {
    showPopup() {
      this.showPop = true
    },
    submit() {
      this.showPop = false
      this.showMsg = true
    }
  }
};
</script>

<style>
.van-tabbar--fixed {
  height: 60px;
  border: solid 1px #7a857b;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.van-nav-bar .van-icon {
  color: #8ba38d;
}
.van-nav-bar--fixed {
  border: solid 1px #7a857b;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.van-nav-bar{
  border: solid 1px #7a857b;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
.van-tabbar-item__icon {
  font-size: 25px;
}
.cr-van-card {
  margin: 10px;
  border-radius: 15px;
  overflow: hidden;
  border: solid #8ba38d;
}
.pop-message {
  margin: 20px;
  font-size: 16px;
  color: #969799;
  font-weight: 400;
}

</style>
