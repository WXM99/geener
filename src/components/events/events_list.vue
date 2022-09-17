<template>
    <div style="margin-bottom: 60px">
        <van-nav-bar class="cr-topbar"
                     title="Events"
                     left-arrow
                     @click-left="returnBack"
        />
      <div style="width: 100%">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="No more events"
                loading-text="Loading..."
                style="width: 100%"
                @load="onLoad"
        >
            <van-cell v-for="(item,key) in list"
                      right-icon
                      size="large"
                      @click="viewQuestion(item.id)"
                      :key="item.id">
                <template #title>
                    {{item.name}}
                </template>
                <template #label>
                  <p class="event-desc">{{item.desc}}</p>
                </template>
                <template #right-icon >
                    <van-rate v-model="list[key].rating" readonly size="small" style="margin-top: 5px; margin-left: 5px;"/>
                </template>
            </van-cell>
        </van-list>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                eventDate: [
                {
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
                {
                  name: "Volunteer by helping hand out food, water and supplies",
                  desc: "We fill our wagons with food and walk around Tempe Beach Park and down Mill St feeding/tending to the less fortunate (those in need)",
                },
                {
                  name: "Volunteer by helping hand out food, water and supplies",
                  desc: "We fill our wagons with food and walk around Tempe Beach Park and down Mill St feeding/tending to the less fortunate (those in need)",
                },
                {
                  name: "Soap Recycling",
                  desc: "We support disadvantaged communities across Asia through a combination of empowerment programs and corporate team building events. Soap Cycling was Asia’s first soap recycling organization. We collect lightly used soap and bottled amenities from hotels that would otherwise go to waste, recycle it, and distribute it to those who need it the most.We support disadvantaged communities across Asia through a combination of empowerment programs and corporate team building events. Soap Cycling was Asia’s first soap recycling organization. We collect lightly used soap and bottled amenities from hotels that would otherwise go to waste, recycle it, and distribute it to those who need it the most. We work with partner hotels to collect soap and bottled amenities which are then sorted, cleaned and recycled by our incredible MEY workers and generous corporate volunteers. The volunteering programmes are largely managed by student interns who use this as an opportunity to develop their leadership skills. The finished products are then dispatched to NGO partners for on-ground distribution within impoverished communities across Asia."
                },
                {
                  name: "Volunteer Gardening",
                  desc: "Meet at the Old Magnesia Well Pump Room, everyone welcome, please contact our Gardening Coordinator, Liz Chidlow, wwwvolunteergardeners@friendsofvalleygardens,co,uk"
                },
                {
                  name: "Volunteer Gardening at Vizcaya",
                  desc: "\"Help keep Vizcaya green and learn from our expert horticulturists in the formal gardens.\n" +
                      "Volunteers are needed to assist Vizcaya’s Horticulturist, David Hardy, and his team with special projects that will enhance the visual appearance and natural environment of the historic Vizcaya Museum and Gardens.\n" +
                      "|| DATE & TIMES ||\n" +
                      "FIRST AND THIRD THURSDAYS | Click above to register\n" +
                      "ADDITIONAL DATES | For additional dates and opportunities to volunteer at Vizcaya, please check out the Hands on Miami website and search for keyword \"Vizcaya.\"\n" +
                      "|| HEALTH AND SAFETY ||\n" +
                      "For the safety of all participants, volunteers are required to adhere to the following regulations:\n" +
                      "-\n" +
                      "All volunteers are required to bring and wear masks\n" +
                      "-Social distancing of 6 feet is required at all times with the exception of families\n" +
                      "-Gloves will be provided. When possible, it is appreciated for volunteers to bring their own\n" +
                      "-Highly recommended for volunteers to bring water bottles, sun lotion and insect repelling.\n" +
                      "-To minimize touch points, the work will not require tools or sharing of any items.\""
                },
              ]
            };
        },
        methods: {
            returnBack() {
                this.$router.go(-1);
            },
            onLoad() {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push({
                            "name": this.eventDate[i%6].name,
                            "rating": this.list.length % 5 + 1,
                            "id": this.list.length % 6,
                            "desc": this.eventDate[i%6].desc,
                        });
                    }
                    this.loading = false;
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            },
            viewQuestion(id) {
                this.$router.push({path: '/events/view/'+id});
                console.log(id)
            }
        }
    }
</script>

<style scoped>

    .van-nav-bar__title.van-ellipsis {
        font-size: 20px;
        font-weight: 200;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .van-nav-bar__arrow {
        font-size: 25px;
    }

    .van-cell__title {
        text-align: left;
        font-size: 18px;
        font-weight: 200;
        width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .event-desc {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0 5px;
      font-size: 12px;
    }
</style>
