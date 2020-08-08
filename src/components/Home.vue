<template>

<div>
    <div class="container-fluid">
        <h1 class="text-light">
        Video Caption Finder!
    </h1>
    <div class="container">
        <h2 class="text-light">
            Choose these selected videos to try
        </h2>
        <div class="row ">
            <div class="col-md-3">
                <router-link to="/link/klnvttPfOUM">
                    <div class="card bg-dark text-light">
                        <img class="card-img-top" src="../assets/webdev.jpg" alt="Card image">
                        <div class="card-header">Web.Dev Live 2020: Day Three</div>
                    </div>
                </router-link>
            </div>
             <div class="col-md-3">
                <router-link to="/link/dl5FHmL_6rE">
                    <div class="card bg-dark text-light">
                        <img class="card-img-top" src="../assets/19hourflight.jpg" alt="Card image">
                        <div class="card-header">What It's Like To Test The World's Longest Flight</div>
                    </div>
                </router-link>
            </div>
             <div class="col-md-3">
                <router-link to="/link/UaGTFeibOEk">
                    <div class="card bg-dark text-light">
                        <img class="card-img-top" src="../assets/tomscott.jpg" alt="Card image">
                        <div class="card-header">Why You Can't Trust Me - Tom Scott</div>
                    </div>
                </router-link>
                
            </div>

             <div class="col-md-3">
                 <router-link to="/link/kjyeCdd-dl8">
                    <div class="card bg-dark text-light">
                        <img class="card-img-top" src="../assets/fallof76.jpg" alt="Card image">
                        <div class="card-header">The Fall of 76 - Internet Historian</div>

                    </div>
                 </router-link>
            </div>
        </div>
            <h2 class="text-light align-middle">
                Or, Put the video id by yourself!
            </h2>
            <p class="text-light">Video id is the random text after <b>watch?v=</b> <br>Example dQw4w9WgXcQ</p>
        <div class="container form-group">
            <div class="row">
                <input class="col-md-9" v-model="videoId">
                <router-link class="btn-primary col-md-3" :to="`/link/${videoId}`" tag="button">Submit</router-link>
            </div>
        </div>
        
        <div class="center" v-if="videoId!=''">
            <h4 class="text-light">
                Make sure that the video is correct!
            </h4>
            <youtube :video-id="videoId" player-width="100%"></youtube>
        </div>
    </div>
    </div>
        
</div>
</template>

<script>
export default {
    name:'Caption Getter',
    data: function () {
        return {
            videoId: '',
        }
    },
}
</script>

<style>
body{
     background-color: #0c0838;
}
img{
    height:170px
}
</style>