<template>
    <div style="margin-bottom: 70px">
        <van-nav-bar class="cr-topbar"
                     left-arrow
                     @click-left="returnBack"
                     fixed placeholder>
            <template #title>
                <van-row>
                    <div>{{paperInfo.companyName}}测试题</div>
                </van-row>
            </template>
        </van-nav-bar>
        <div class="cr-van-card" v-for="(qs,index) in questionList" v-bind:key="qs.questionId">
            <van-divider dashed>第{{index+1}}题: {{qs.questionName}}</van-divider>
            <div class="cr-desc">
                {{qs.questionContent}}
            </div>
            <van-divider dashed>样例</van-divider>
            <div class="cr-sample" v-html="qs.questionSample"></div>
            <van-divider dashed>我的答案</van-divider>
            <div class="cr-desc">
                {{qs.answer}}
            </div>
            <div v-if="qs.reviewed">
                <van-divider dashed>评论</van-divider>
                <div class="cr-desc">
                    {{qs.comments}}
                </div>
                <van-divider dashed>得分</van-divider>
                <van-rate v-model="qs.score"/>
                <van-divider dashed></van-divider>
            </div>
            <van-divider dashed v-else>该题目未审阅</van-divider>
        </div>
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
                        answer: 'test',
                        comments: 'good',
                        score: 4,
                        reviewed: true
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
                        answer: 'test',
                        comments: 'good',
                        score: 5,
                        reviewed: false
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
            },
            returnBack() {
                this.$router.go(-1);
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
