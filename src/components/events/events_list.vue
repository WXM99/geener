<template>
  <div style="margin-bottom: 60px">
    <van-nav-bar class="cr-topbar"
                 left-arrow
                 title="Events"
                 @click-left="returnBack"
    />
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="No more events"
        loading-text="Loading..."
        @load="onLoad"
    >
      <van-cell v-for="(item,key) in list"
                :key="item.id"
                right-icon
                size="large"
                @click="viewQuestion(item.id)">
        <template #title>
          Event {{ item.name }}
        </template>
        <template #label>
          {{ item.desc }}
        </template>
        <template #right-icon>
          <span style="font-size: 16px; font-weight: 200">Rating</span>
          <van-rate v-model="list[key].rating" readonly size="small" style="margin-top: 5px; margin-left: 5px;"/>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    returnBack() {
      this.$router.go(-1);
    },
    onLoad() {
      this.$axios({
        method: 'get',
        url: '/get-recommendation',
        withCredentials: false
      }).then(response => {
        console.log('DATE\n', response)
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push({
              "name": this.list.length % 6,
              "rating": this.list.length % 5 + 1,
              "id": this.list.length % 6,
              "desc": "Events details",
            });
          }
          this.loading = false;
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 1000);
      })
    },
    viewQuestion(id) {
      this.$router.push({path: '/events/view/' + id});
      console.log(id)
    }
  },
  mounted() {
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

.van-cell__title {
  text-align: left;
  font-size: 18px;
  font-weight: 200;
}
</style>
