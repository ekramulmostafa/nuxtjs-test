<template>
    <section class="total-content-list">
        <div>
            <div class=""><h1>{{contentTitle}}</h1></div>
            <div class="total-content-list">
                <video id="my-player" class="video-js" controls preload="auto" width="640" height="264">
                </video>
            </div>

            <div class="description"><b>Description: </b>{{contentDetails}}</div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    import videojs from 'video.js'

    export default {
        head () {
            return {

               link: [{
                   rel: 'stylesheet', href: 'https://vjs.zencdn.net/7.0.0/video-js.css'
               }]
            }
        },
        data(){
            return{
                token: '',
                contentTitle: '',
                contentDetails: '',
                contentUrl: '',
                baseURL: 'https://api.bioscopelive.com'
            }
        },
        async mounted(){
            this.token = localStorage.getItem("tokenSaved")
            // console.log( this.$route.params.bongoId);
            let objectInstance = {
                url: this.baseURL + '/api/en/content/' + this.$route.params.bongoId,
                method: 'get',
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer " + this.token,
                    "Access-Code" : "QkQ%3D"
                },
            };

            await axios(objectInstance).then((res) => {
                // console.log(res.data._embedded.content);return;
                // console.log(res.data._embedded.contents);return;
                this.contentUrl = res.data._embedded.content.videoUrl;
                console.log(this.contentUrl);
                this.contentTitle = res.data._embedded.content.title;
                this.contentDetails = res.data._embedded.content.synopsis.detailSynopsis;
                this.contentUrl = res.data._embedded.content.videoUrl;
            })



            // player options
            var options = {
                html5: {
                    hls: {

                    }
                },

                techOrder: ['html5'],
            }
            var player = videojs('my-player', options);
            // console.log('content = '+this.contentUrl);
            var obj = {
                // src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                src: this.contentUrl,
                type: 'application/x-mpegURL'

            };

            // console.log(obj);
            await player.src({
                src: this.contentUrl,
                // src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                type: 'application/x-mpegURL'
            });
            player.play();
        }
    }
</script>