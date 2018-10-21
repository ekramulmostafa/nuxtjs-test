<template>
    <section class="single-recipe">
        <h2>{{ $route.params.id }}</h2>
        <h1>title</h1>
        <div>
            <img src="">
        </div>
        <p> the recipe</p>
    </section>
</template>

<style scoped>
    .single-recipe{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 30px;
    }
</style>