<template>
    <div>
        <router-view/>
        <van-popup closeable v-model="showPop" round position="top" :style="{ height: '70px' }">
            <div class="pop-message">{{this.message}}</div>
        </van-popup>
        <van-tabbar route>
            <van-tabbar-item replace to="/questions" icon="question-o">浏览题目</van-tabbar-item>
            <van-tabbar-item icon="browsing-history-o" @click="showPopup">浏览职位</van-tabbar-item>
            <van-tabbar-item replace to="/" icon="user-circle-o" :badge="msgNum">我的消息</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msgNum: 0,
                showPop: false,
                message: '你收到了新的通知，请点击我的消息查看。'
            };
        },
        methods: {
            showPopup () {
                this.showPop = true
            }
        }
    };
</script>

<style>
    .van-tabbar--fixed {
        height: 60px;
    }

    .van-tabbar-item__icon {
        font-size: 25px;
    }
    .pop-message {
        margin: 20px;
        font-size: 16px;
        color: #969799;
        font-weight: 400;
    }

</style>
