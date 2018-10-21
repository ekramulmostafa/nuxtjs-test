<template>
    <div class="content-list-item">
        <nuxt-link :to="'/bioscopeContentList/'+bongoId">
            <div class="content-image"><img :src="getImageUrl"></div>
            <div class="content-detail">{{contentName}}</div>
        </nuxt-link>
    </div>

</template>

<script>

    export default {
        // https://cdn.bioscopelive.com/upload/content/landscape/sd/ZsBn3sx7mwO.jpg
        props: ['bongoId', 'contentName'],
        computed: {
            getImageUrl(){
                return 'https://cdn.bioscopelive.com/upload/content/landscape/sd/'+this.bongoId+'.jpg';
            }
        }
    }
</script>