<template>
    <div style="margin-bottom: 70px">
        <van-nav-bar class="cr-topbar"
                     :title="this.testData.name"
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
                        <img :src="this.imageList[this.questionId]" style="width: 100%">
                        <van-divider dashed>Events Description</van-divider>
                        <div class="cr-desc">
                            {{this.testData.desc}}
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
                      <van-button round type="info"
                                  @click="submitCmt(0)"
                                  color="#8ba38d"
                                  style="font-size: 20px; margin: 10px">Like
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
              testData: {
                name: "TMF Operation Legacy – United Food Bank",
                desc: "Join TMF Phoenix Chapter, and the Character Does Matter Mentorship program for a service project in Mesa. Participants will build emergency food bags or sort food drive donations into boxes.\n" +
                    "What To Wear: Closed-toed shoes and appropriate attire for a warehouse.\n" +
                    "This is a family-friendly event, and volunteers can be as young as five years old with a parent or guardian.\n" +
                    "All volunteers are expected to adhere to local and federal COVID safety precautions.\n" +
                    "Please only sign up if you are sure you can attend this event. Due to this coinciding with the Character Does Matter for the children attending that mentorship program this summer, we have limited registration. We currently have 15 adult and 25 children slots open for attendees of the CDM Mentorship Program. The last two weeks before the event, volunteer slots may open for additional volunteers, and we will announce on FB if more become available.\n" +
                    "If you sign up and you can no longer attend, please email phoenix.chapter@travismanion.com so that the spot can be opened to another member.\n" +
                    "REGISTER LINK: https://www.travismanion.org/.../mesa-az-back-to-school.../\n" +
                    "This project will honor the life and legacy of Army Sgt. Aaron B. Cruttenden.\n" +
                    "See less"
              },
              imageList: [
                require("@/assets/ds-hash.png"),
                require("@/assets/ds-queue.png"),
                require("@/assets/ml.png"),
                require("@/assets/ag-rec.png"),
                require("@/assets/ds-array.png"),
                require("@/assets/ds-bst.png")
              ],
                questionId: this.$route.params.id,
                questionName: "Events " + this.$route.params.id,
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
                this.$toast.success('Successfully!');
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
