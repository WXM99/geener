<template>
    <div style="margin-bottom: 70px">
        <div class="cr-van-card" v-for="img in imageList"
             v-bind:key="img"
             v-bind:style="{backgroundImage:'url(' + img + ')',
             backgroundRepeat:'no-repeat',
             backgroundSize:'100% 100%',
             height: '220px'}">
            <van-goods-action-button class="float-btn"
                    type="warning"
                    text="查看题目"
                    @click="viewQuestions"
            />
        </div>
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
            };
        },
        methods: {
            viewQuestions() {
                this.$router.push({path: '/questions/list'})
            }
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

    .card-img {
        max-width: 100%;
        min-height: 100%;
        display: block;
    }

    .float-btn {
        transform: translate(-100px, 150px);
        width: 30%;
        font-size: 20px;
        box-shadow: 0px 0px 10px #fff;
    }
</style>
