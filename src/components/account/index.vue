<template style="height: 100%">
  <div v-bind:style="{backgroundImage:'url(' + bgImg + ')',
                        backgroundRepeat:'no-repeat',
                        height: '100vh',
                        lineHeight: '100vh',
                        backgroundSize:'cover'}">
    <div class="cr-van-card login-card">
          <div class="logo-box"
               v-bind:style="{backgroundImage:'url(' + logo + ')',
             backgroundRepeat:'no-repeat',
             backgroundSize:'100% 100%'}">
          </div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
              v-model="username"
              :rules="[{ required: true, message: 'Please fill user name' }]"
              label="User Name"
              name="User Name"
              placeholder="User Name"
          />
          <van-field
              v-model="password"
              :rules="[{ required: true, message: 'Please fill password' }]"
              label="Password"
              name="Password"
              placeholder="Password"
              type="password"
          />
        </van-cell-group>
        <b-row v-bind:style="{margin: 0}">
          <b-col cols="6" lg="6" md="6" no-gutters="true" sm="6">
            <div style="margin: 6px;">
              <van-button block color="#8ba38d" round>
                Log In
              </van-button>
            </div>
          </b-col>
          <b-col cols="6" lg="6" md="6" no-gutters="true" sm="6">
            <div style="margin: 6px;">
              <van-button block round>
                Sign Up
              </van-button>
            </div>
          </b-col>
        </b-row>
      </van-form>
    </div>
  </div>
</template>


<script>
import router from "@/router";

export default {
  data() {
    return {
      bgImg: require("@/assets/bg.jpg"),
      logo: require("@/assets/logo.png"),
      username: 'XiaomiaoW',
      email: 'Xiaomiao.W@hotmail.com',
      password: 'I like Greener App!',
    };
  },
  methods: {
    onSubmit() {
      console.log(this.username, this.password)
      router.push("/")
    }
  }
};
</script>


<style scoped>
.login-card {
  background: white;
  display:inline-block;
}

.logo-box {
  width: 200px;
  height: 70px;
  overflow: hidden;
  margin: 20px auto;
}
</style>
