<template>
  <div style="margin-bottom: 70px">
    <van-nav-bar class="cr-topbar"
                 :title="questionName"
                 left-arrow
                 fixed placeholder
                 @click-left="returnBack"
    />
    <b-container>
      <b-row>
        <b-col cols="12" lg="6" xl="6" sm="12" md="12"
               no-gutters="true"
               v-bind:style="{'padding': '0px'}">
          <div class="cr-van-card">
            <img v-for="(item, key) in imgUrl" v-bind:key="key" :src="item" style="width: 100%; height: 100%">
            <van-divider dashed>Events Description</van-divider>
            <div class="cr-desc">
              {{ this.questionContent }}
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="6" xl="6" sm="12" md="12"
               no-gutters="true"
               v-bind:style="{'padding': '0px'}">
          <div class="cr-van-card">
            <van-divider dashed>Feedback</van-divider>
            <van-field name="rate" label="Rates">
              <template #input>
                <van-rate v-model="rating"/>
              </template>
            </van-field>
            <van-field name="rate" label="Likes">
              <template #input>
                <van-rate v-model="difficulty"/>
              </template>
            </van-field>
            <van-field
                v-model="comment"
                rows="3"
                autosize
                label="Comments"
                type="textarea"
                maxlength="100"
                placeholder="..."
                show-word-limit
            />
            <van-button round type="info"
                        @click="submitCmt(questionId)"
                        color="#8ba38d"
                        style="font-size: 20px; margin: 10px">Submit
            </van-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import store from "@/main";
import router from "@/router";

export default {
  data() {
    return {
      questionId: this.$route.params.id,
      questionName: "Events " + this.$route.params.id,
      questionContent: "",
      rating: 0,
      difficulty: 0,
      comment: '',
      imgUrl: []
    }
  },
  mounted() {
    console.log(store.login)
    this.$axios({
      method: 'post',
      url: '/default/get-event-detail',
      data: {
        "id": this.questionId
      },
      withCredentials: false
    }).then(response => {
      console.log(response)
      this.questionName = response.data.name
      this.questionContent = response.data.details
      this.imgUrl = [response.data.imgPath]
    })
  },
  methods: {
    returnBack() {
      router.go(-1);
    },
    submitCmt(id) {
      console.log(id);
      this.$toast.success("");
    }
  }
}
</script>

<style scoped>

.van-nav-bar__title.van-ellipsis {
  font-size: 20px;
  font-weight: 200;
}

.van-nav-bar__arrow {
  font-size: 25px;
}

.van-nav-bar .van-icon {
  color: rgb(134, 134, 134);
}

.van-cell__title {
  text-align: left;
  font-size: 18px;
  font-weight: 200;
}


.cr-desc {
  margin: 10px;
  text-indent: 2em;
  text-align: left;
}

.cr-sample {
  margin: 10px;
  text-align: left;
  background: #f7f9fa;
  padding: 10px;
  line-height: 25px;
  font-family: "Courier New";
  font-size: 15px;
}
</style>
