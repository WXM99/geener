<template>
    <div style="margin-bottom: 70px">
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
                        <div>{{skills}}</div>
                    </van-panel>
                </van-col>
            </van-row>
        </div>
        <div class="cr-van-card">
            <van-divider dashed>待办事项</van-divider>
            <van-cell value="查看" is-link to="/paper_list/waiting">
                <template #title>
                    <span class="custom-title">待做试题</span>
                    <van-tag color="#f2826a" plain>{{waitingQs}}</van-tag>
                </template>
            </van-cell>
            <van-cell value="查看" is-link to="/paper_list/submitted">
                <template #title>
                    <span class="custom-title">已提交试题</span>
                    <van-tag color="#f2826a" plain>{{submitQs}}</van-tag>
                </template>
            </van-cell>
            <van-cell value="查看" is-link to="/paper_list/reviewed">
                <template #title>
                    <span class="custom-title">已审阅试题</span>
                    <van-tag color="#f2826a" plain>{{reviewedQs}}</van-tag>
                </template>
            </van-cell>
        </div>
        <div class="cr-van-card">
            <van-divider dashed>历史记录</van-divider>
            <van-cell value="查看" is-link>
                <template #title>
                    <span class="custom-title">做题记录</span>
                </template>
            </van-cell>
            <van-cell value="查看" is-link>
                <template #title>
                    <span class="custom-title">评论记录</span>
                </template>
            </van-cell>
            <van-cell value="查看" is-link>
                <template #title>
                    <span class="custom-title">浏览记录</span>
                </template>
            </van-cell>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                avatar: require("@/assets/avatar.png"),
                username: '魏小渺',
                email: 'wxmxl@hotmail.com',
                skills: 'Java, C++, JS, Python...',
                waitingQs: 2,
                submitQs: 1,
                reviewedQs: 0
            };
        }
    };
</script>


<style scoped>
    .cr-van-card {
        margin: 20px;
        box-shadow: 0px 5px 10px #b4b4b4;
        border-radius: 15px;
        overflow: hidden;
    }

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
