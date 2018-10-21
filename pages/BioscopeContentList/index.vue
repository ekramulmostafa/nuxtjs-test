<template>
    <section class="total-content-list">
        <h1>Content list Nuxtjs</h1>
        <ContentListBlock v-for="item in contentLists" :key="item.id"
                          :bongoId="item.bongoId"
                          :contentName="item.title"
        ></ContentListBlock>
    </section>
</template>

<script>
    import axios from 'axios'
    import ContentListBlock from '@/components/contentListBlock'
    export default {
        data() {
            return{
                baseURL: 'https://api.bioscopelive.com',
                token: '',
                contentLists: []
            }
        },
        components: { ContentListBlock },
        mounted(){
            this.token = localStorage.getItem("tokenSaved");


            // this.tokenGennerate();
            if(this.token == null){
                this.tokenGennerate();
            }


            this.getContentList();




        },
        methods:{
            getContentList(){

                let objectInstance = {
                    url: this.baseURL + '/api/en/content-selector/feluda-full-series',
                    url: this.baseURL + '/api/en/content-selector/drama-dhamaka',
                    method: 'get',
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : "Bearer " + this.token,
                        "Access-Code" : "QkQ%3D"
                    },
                };

                axios(objectInstance).then((res) => {

                    // console.log(res.data._embedded.contents);
                    this.contentLists = res.data._embedded.contents;
                }).catch(function (error) {
                    console.log('error'+error);
                });
            },

            tokenGennerate(){

                let objectInstance = {
                    url: this.baseURL + '/api/login_check',
                    method: 'post',
                    // headers: {'X-Custom-Header': 'foobar'},
                    data: {
                        "authentication_type" 	: "anonymous",
                        "anonymous_id"			: "bioscope_anonymous",
                        "client_type"     		: "web",
                        "client_id"       		: "web_"+Math.random(),
                        "channel"  				: "bioscope_web_anonymous"
                    }
                };

                // console.log(objectInstance);return;
                axios(objectInstance).then((res) => {

                    this.token = res.data.token;
                    localStorage.setItem('tokenSaved', this.token);
                    // localStorage.setItem('tokenSaved',)
                }).catch(function (error) {
                    console.log(error);
                });

            }

        }
    }
</script>