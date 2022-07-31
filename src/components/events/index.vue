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
          <b-col cols="6" lg="6" md="6"
                 no-gutters="true"
                 sm="6">
            <b-row>
              <b-col v-for="(item, key) in eventList" v-bind:key="key" cols="12" lg="6" md="12"
                     no-gutters="true"
                     sm="12"
                     v-bind:style="{'padding': '0px', 'margin': '0px'}"
                     xl="6">
                <div class="cr-van-card">
                  <img :src="item.imgUrl" style="width: 100%">
                  <div>{{ item.name }}</div>
                  <p class="event-desc">{{ item.desc }}</p>
                  <van-button block color="#8ba38d"
                              text="More"
                              @click="viewQuestions(item.id)"
                  />
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6" lg="6" md="6"
                 no-gutters="true"
                 sm="6">
            <b-row>
              <b-col v-for="(item, key) in eventList2" v-bind:key="key" cols="12" lg="6" md="12"
                     no-gutters="true"
                     sm="12"
                     v-bind:style="{'padding': '0px', 'margin': '0px'}"
                     xl="6">
                <div class="cr-van-card">
                  <img :src="item.imgUrl" style="width: 100%">
                  <div>Event{{ item.name }} <br> {{ item.desc }}</div>
                  <van-button block color="#8ba38d"
                              text="More"
                              @click="viewQuestions(item.id)"
                  />
                </div>
              </b-col>
            </b-row>
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
      eventList2: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    viewQuestions(id) {
      this.$router.push({path: '/events/view/' + id});
    },
    onLoad() {
      this.$axios({
        method: 'get',
        url: '/get-recommendation',
        withCredentials: false
      }).then(response => {
        let events = response.data.recommendations
        for (let idx in events) {
          let e = events[idx]
          let front_event = {
            "name": e.name,
            "rating": e.score * 5,
            "id": e._id,
            "desc": e.details,
            "date": e.date,
            "time": e.time,
            "host": e.host,
            "location": e.location,
            "imgUrl": this.imageList[this.eventList.length % 6]
          }
          console.log(front_event)
          this.eventList.push(front_event)
        }
        this.imageList.reverse()
        for (let i = 0; i < 10; i++) {
          this.eventList2.push({
            "name": this.eventList2.length % 6,
            "rating": this.eventList2.length % 5 + 1,
            "id": this.eventList2.length % 6,
            "desc": "Events details",
            "imgUrl": this.imageList[this.eventList2.length % 6]
          });
        }
        this.loading = false;
        this.finished = true;
      })
    },
  }
};
</script>

<style scoped>
.card-img {
  max-width: 100%;
  min-height: 100%;
  display: block;
}

.event-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 5px;
  font-size: 12px;
}

.float-btn {
  width: 30%;
  font-size: 15px;
  float: left;
  margin: 5px;
}
</style>
