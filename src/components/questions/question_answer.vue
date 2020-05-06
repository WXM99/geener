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
                        <van-divider dashed>题目描述</van-divider>
                        <div class="cr-desc">
                            {{this.questionContent}}
                        </div>
                        <van-divider dashed>样例</van-divider>
                        <div class="cr-sample" v-html="questionSample">
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" lg="6" xl="6" sm="12" md="12"
                       no-gutters="true"
                       v-bind:style="{'padding': '0px'}">
                    <div class="cr-van-card">
                        <van-divider dashed>评论区</van-divider>
                        <van-field name="rate" label="质量评分">
                            <template #input>
                                <van-rate v-model="rating"/>
                            </template>
                        </van-field>
                        <van-field name="rate" label="难度评分">
                            <template #input>
                                <van-rate v-model="difficulty"/>
                            </template>
                        </van-field>
                        <van-field
                                v-model="comment"
                                rows="3"
                                autosize
                                label="评论"
                                type="textarea"
                                maxlength="100"
                                placeholder="请输入留言"
                                show-word-limit
                        />
                        <van-button round type="info"
                                    @click="submitCmt(questionId)"
                                    color="linear-gradient(to right, #4bb0ff, #6149f6)"
                                    style="font-size: 20px; margin: 10px">提交评论
                        </van-button>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                questionId: this.$route.params.id,
                questionName: "题目：" + this.$route.params.id,
                questionContent: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list." +
                    "You may assume the two numbers do not contain any leading zero, except the number 0 itself.\n",
                questionSample:
                    "Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) <br>" +
                    "Output: 7 -> 0 -> 8 <br>" +
                    "Explanation: 342 + 465 = 807.",
                rating: 0,
                difficulty: 0,
                comment: ''
            }
        },
        methods: {
            returnBack() {
                this.$router.go(-1);
            },
            submitCmt(id) {
                console.log(id);
                this.$toast.success('评论成功！');
            }
        }
    }
</script>

<style scoped>
    .van-nav-bar.van-hairline--bottom {
        height: 50px;
    }

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

    .cr-van-card {
        margin: 20px;
        box-shadow: 0px 5px 10px #b4b4b4;
        border-radius: 15px;
        overflow: hidden;
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
