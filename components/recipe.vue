<template>
    <nuxt-link :to="'/recipes/'+id">
        <article class="recipe">
            <div class="recipe-background-image" :style="{backgroundImage: 'url(' + thumbnail + ')' }"> </div>
            <h1>{{title}}</h1>
            <p>{{preview}}</p>
        </article>
    </nuxt-link>

</template>

<script>
    export default {
        props: ['thumbnail', 'title', 'preview', 'id']
    }
</script>

<style scoped>
    .recipe-background-image{
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 200px;
    }
    .recipe{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        width: 280px;
        padding: 8px;
        border: 1px solid #ccc;
        box-shadow: #aaa;

        margin: 10px;

    }
    a{
        color: black;
        text-decoration: none;
    }
</style>