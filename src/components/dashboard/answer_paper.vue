<template>
    <div style="margin-bottom: 70px">
        <van-nav-bar class="cr-topbar"
                     fixed placeholder>
            <template #title>
                <van-row>
                    <div style="margin-top: -10px; margin-bottom: -10px">{{paperInfo.companyName}}测试题</div>
                </van-row>
                <van-count-down :time="time" format="剩余时间：mm:ss" style="width: 60%"></van-count-down>
            </template>
        </van-nav-bar>
        <b-container>
            <b-row>
                <b-col cols="12" lg="6" xl="6" sm="12" md="12"
                       no-gutters="true"
                       v-for="(qs,index) in questionList" v-bind:key="qs.questionId"
                       v-bind:style="{'padding': '0px', 'margin': '0px'}">
                    <div class="cr-van-card">
                        <van-divider dashed>第{{index+1}}题: {{qs.questionName}}</van-divider>
                        <div class="cr-desc">
                            {{qs.questionContent}}
                        </div>
                        <van-divider dashed>样例</van-divider>
                        <div class="cr-sample" v-html="qs.questionSample"></div>
                        <van-divider dashed>作答区</van-divider>
                        <van-field
                                v-model="qs.answer"
                                rows="5"
                                autosize
                                label="答案"
                                type="textarea"
                                placeholder="请输入回答"
                                show-word-limit
                        />
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <van-button round type="info"
                    @click="ansPaper"
                    color="linear-gradient(to right, #4bb0ff, #6149f6)"
                    style="font-size: 20px; margin: 10px">提交试题
        </van-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                paperId: this.$route.params.id,
                paperInfo:
                    {
                        "companyName": "微软亚洲研究院",
                        "paperId": 123,
                        "finishTime": 45,
                        "questionAmt": 5,
                        "type": "Java & Algorithm",
                        "deadline": "2020-5-10 8:00 p.m."

                    },
                time: 45 * 60 * 1000,
                questionList: [
                    {
                        questionId: 123,
                        questionName: "链表加法",
                        questionContent: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list." +
                            "You may assume the two numbers do not contain any leading zero, except the number 0 itself.\n",
                        questionSample:
                            "Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) <br>" +
                            "Output: 7 -> 0 -> 8 <br>" +
                            "Explanation: 342 + 465 = 807.",
                        answer: ''
                    },
                    {
                        questionId: 234,
                        questionName: "链表乘法",
                        questionContent: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list." +
                            "You may assume the two numbers do not contain any leading zero, except the number 0 itself.\n",
                        questionSample:
                            "Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) <br>" +
                            "Output: 7 -> 0 -> 8 <br>" +
                            "Explanation: 342 + 465 = 807.",
                        answer: ''
                    }
                ]
            }
        },
        mounted() {
            console.log(this.paperId)
        },
        methods: {
            ansPaper() {
                console.log(this.paperInfo);
                console.log(this.questionList);
                this.$toast.success('提交成功！');
            }
        }
    };
</script>
<style scoped>
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

    .van-count-down {
        position: fixed;
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
