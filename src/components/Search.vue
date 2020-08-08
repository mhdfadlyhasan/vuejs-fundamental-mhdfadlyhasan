<template>
<div>   
    <div class="container-fluid">
        <h1 class="text-light">
            Video Caption Finder!
        </h1>
        <div class="container center" v-if="toggleVideo">
            <h4 class="text-light">
                Playing video from your time stamp!
            </h4>
            <youtube :video-id="videoId" :player-vars="{start: timeStartVideo , autoplay: 1}" player-width="100%"></youtube>
        </div>
        <div class="container" >
            <h2 class="text-light">
                Find the Caption
            </h2>
            <div class="container form-group">
                <h2 class="text-light">
                    Setting
                </h2>
                <div class="text-light row">
                    <div class="col-md-4">
                        Paginate result <br>
                        <input type="radio" id="Yes" value="1" class="col-md-2" v-model="paginated"> Yes
                        <input type="radio" id="No" value="0" class="col-md-2" v-model="paginated"> No
                    </div>
                    <div class="col-md-4">
                        Marking result<br>
                        <input type="radio" id="Yes" value="1" class="col-md-2" v-model="marked"> Yes
                        <input type="radio" id="No" value="0" class="col-md-2" v-model="marked"> No
                    </div>
                    <div class="col-md-4">
                        Result Size <input class="col-md-2" v-model="size">
                    </div>
                    
                    
                </div>
                <div class="row">
                    <input class="col-md-9" v-model="caption">
                    <button class="btn-primary col-md-3" @click="find">Find</button>
                </div>
                <div class="row" v-if="captionList.length>0">
                    <button class="btn-secondary col-md-3" @click="goTo(firstList)">First</button>
                    <button class="btn-secondary col-md-3" @click="goTo(prevList)">prev</button>
                    <button class="btn-secondary col-md-3" @click="goTo(nextList)">next</button>
                    <button class="btn-secondary col-md-3" @click="goTo(lastList)">last</button>
                </div>
            </div>

            <div class="text-dark">
                <div class="row">
                    <div  class="col-md-6" v-for="item in captionList" v-bind:key="item.start">
                        <div >
                            <div class="card" @click="setVideo(item.start,item.end)">
                                <div class="card-header">
                                    {{ item.start }} :
                                    {{ item.end }}
                                </div>
                                <div class="card-body" v-html="item.text"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'CaptionGetter',
    data: function () {
        return {
            videoId: this.$route.params.video_link,
            videoLink: 'https://www.youtube.com/watch?v='+ this.$route.params.video_link,
            caption: '',
            timeStartVideo: 0,
            timeFinishVideo: 0,
            page: 1,
            size: 10,
            marked:1,
            paginated: 1,
            captionList: [],
            firstList: String,
            lastList: String,
            prevList: String,
            nextList: String,
            totalResult: 0,
            totalPageList: 0,
            toggleVideo: false

        }
    },
    methods:{
        find: function()
        {
           axios
            .get('https://cari-teks-video-api.vercel.app/api/search',{
                params:{
                    url: this.videoLink,
                    q: this.caption,
                    page: this.page,
                    size: this.size,
                    marked: this.marked,
                    paginated: this.paginated,
                }
            })
            .then(response => {
                this.captionList = response.data.data
                this.firstList = response.data.first
                this.lastList = response.data.last
                this.prevList = response.data.prev
                this.nextList = response.data.next
                this.totalResult = response.data.total
                this.totalPapagegeList = response.data.page
                this.page = response.data.page
                
            })
        },
        setVideo: function($start, $finish)
        {   
            
            this.timeStartVideo = $start
            this.timeFinishVideo = $finish
            
            var myTimerPromise = new Promise((resolve) => 
            resolve(), 2000);  // 
             Promise.all([myTimerPromise, this.toggleVideos()]).then( () => {
            this.toggleVideo = true;
                console.log("Data fetched for sliders and posts");
            });
            
        },
        toggleVideos: function()
        {
            if(this.toggleVideo)this.toggleVideo=false
        },
        goTo: function($target_page)
        {
            if($target_page)
            {
                axios
                .get($target_page)
                .then(response => {
                    this.captionList = response.data.data
                    this.firstList = response.data.first
                    this.lastList = response.data.last
                    this.prevList = response.data.prev
                    this.nextList = response.data.next
                    this.totalResult = response.data.total
                    this.totalPageList = response.data.page
            })
            }
            
        },
    },
}
</script>