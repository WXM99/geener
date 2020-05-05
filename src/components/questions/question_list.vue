<template>
    <div style="margin-bottom: 60px">
        <van-nav-bar class="cr-topbar"
                     title="问题列表"
                     left-arrow
                     @click-left="returnBack"
        />
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell v-for="(item,key) in list"
                      right-icon
                      size="large"
                      @click="viewQuestion(item.id)"
                      :key="item.id">
                <template #title>
                    第{{item.name}}题
                </template>
                <template #label>
                    {{item.desc}}
                </template>
                <template #right-icon >
                    <span style="font-size: 16px; font-weight: 200">难度: &nbsp;</span>
                    <van-rate v-model="list[key].difficulty" readonly size="small" style="margin-top: 5px; margin-left: 5px;"/>
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
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push({
                            "name": this.list.length + 1,
                            "difficulty": this.list.length % 5 + 1,
                            "id": "123",
                            "desc": "题目简述",
                        });
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            },
            viewQuestion(id) {
                this.$router.push({path: '/questions/view/'+id});
                console.log(id)
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
</style>
