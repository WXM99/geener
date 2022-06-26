<template>
  <div style="margin-bottom: 70px">
    <b-container>
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="No more events"
          loading-text="Loading..."
          @load="onLoad"
      >
        <b-row>
          <b-col v-for="(item, key) in eventList" v-bind:key="key" cols="12" lg="4" md="12"
                 no-gutters="true"
                 sm="12"
                 v-bind:style="{'padding': '0px', 'margin': '0px'}"
                 xl="4">
            <div class="cr-van-card">
              <img :src="item.imgUrl" style="width: 100%">
              <van-goods-action-button class="float-btn"
                                       text="More"
                                       color="#8ba38d"
                                       type="primary"
                                       @click="viewQuestions(item.id)"
              />
              <div style="margin-top: 15px">Event{{item.name}} - {{item.desc}}</div>
            </div>
          </b-col>
        </b-row>
      </van-list>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        require("@/assets/ds-hash.png"),
        require("@/assets/ds-queue.png"),
        require("@/assets/ml.png"),
        require("@/assets/ag-rec.png"),
        require("@/assets/ds-array.png"),
        require("@/assets/ds-bst.png")
      ],
      eventList: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    viewQuestions(id) {
      this.$router.push({path: '/events/view/'+id});
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.eventList.push({
            "name": this.eventList.length + 1,
            "rating": this.eventList.length % 5 + 1,
            "id": this.eventList.length % 6,
            "desc": "Events details",
            "imgUrl": this.imageList[this.eventList.length % 6]
          });
        }
        this.loading = false;
        if (this.eventList.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.card-img {
  max-width: 100%;
  min-height: 100%;
  display: block;
}

.float-btn {
  width: 30%;
  font-size: 20px;
  float: left;
  margin: 5px;
}
</style>
