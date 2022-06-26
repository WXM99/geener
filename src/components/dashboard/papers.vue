<template>
    <div style="margin-bottom: 70px">
        <van-nav-bar class="cr-topbar"
                     :title="title"
                     left-arrow
                     @click-left="returnBack"
        />
        <b-container>
            <b-row>
                <b-col cols="12" lg="4" xl="4" sm="12" md="12"
                       no-gutters="true"
                       v-for="paper in paperList" v-bind:key="paper.paperId"
                       v-bind:style="{'padding': '0px'}">
                    <div class="cr-van-card">
                        <van-panel :title="paper.companyName + '测试题目'">
                            <div class="paper-prop">
                                完成时间: {{paper.finishTime}}min <br>
                                提交截止时间: {{paper.deadline}} <br>
                                题目数量: {{paper.questionAmt}} <br>
                                题目类型: {{paper.type}} <br>
                            </div>
                            <van-divider dashed></van-divider>
                        </van-panel>
                        <van-goods-action-button class="ans-btn"
                                                 type="warning"
                                                 text="开始答题"
                                                 v-if="canBeAns"
                                                 @click="ansPaper(paper.paperId)"
                        />
                        <van-goods-action-button class="ans-btn"
                                                 type="warning"
                                                 text="查看答卷"
                                                 v-else
                                                 @click="reviewPaper(paper.paperId)"
                        />
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
                title: "",
                paperList: [
                    {
                        "companyName": "微软亚洲研究院",
                        "paperId": 123,
                        "finishTime": 45,
                        "questionAmt": 5,
                        "type": "Java & Algorithm",
                        "deadline": "2020-5-10 8:00 p.m."

                    }
                ],
                type: this.$route.params.type,
                canBeAns: false
            };
        },
        mounted() {
            this.title = this.$route.params.type;
            this.paperList.push({
                companyName: "Morgan Stanley",
                type: "Java & Algorithm",
                finishTime: 90,
                deadline: "2020-5-10 8:00 p.m.",
                paperId: 234,
                questionAmt: 8
            });
            this.paperList.push({
                companyName: "蚂蚁金服",
                type: "C++ Development",
                finishTime: 90,
                deadline: "2020-5-10 8:00 p.m.",
                questionAmt: 8,
                paperId: 345
            })
        },
        methods: {
            returnBack() {
                this.$router.go(-1);
            },
            ansPaper(id) {
                this.$router.push({path: '/ans_paper/' + id})
            },
            reviewPaper(id) {
                this.$router.push({path: '/view_paper/' + id})
            }
        }
    };
</script>

<style scoped>
    .ans-btn {
        width: 100px;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 400;
    }

    .paper-prop {
        text-align: left;
        font-size: 12px;
        font-weight: 400;
        color: #979797;
        margin-left: 20px;
        margin-top: 20px;
    }

    .van-nav-bar .van-icon {
        color: rgb(134, 134, 134);
    }

    .van-cell__title {
        text-align: left;
        font-size: 18px;
        font-weight: 200;
    }
</style>
