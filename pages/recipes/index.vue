<template>
    <section class="recipes">
        <!--<Recipe
                thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqzwLuQXuQug8Tqvc7jrzHVFGba-V1bm4gtWFPjMyE_Ufo2OR"
                title="whats up"
                preview="kotta kamina"
                id="1"
        ></Recipe>
        <Recipe
                thumbnail="https://assets.wholefoodsmarket.com/recipes/4514/460/290/4514-1.jpg"
                title="whats up 2"
                preview="kotta kamina 2"
                id="2"
        ></Recipe>-->

        <!--<Recipe v-for="recipe in recipes"
                :thumbnail="recipe.thumbnail"
                :title="recipe.title"
                :preview="recipe.preview"
                :id="recipe.id"
        ></Recipe>-->
    </section>
</template>
<script>
    import Recipe from '@/components/recipe'
    export default {
        components: {Recipe},
        asyncData(){
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve({
                        recipes: [
                            {
                                id: '1',
                                title: 'async data testing 1',
                                preview: 'async data testing preview 1',
                                thumbnail: 'https://assets.wholefoodsmarket.com/recipes/4514/460/290/4514-1.jpg'
                            },
                            {
                                id: '2',
                                title: 'async data testing 2',
                                preview: 'async data testing preview 2',
                                thumbnail: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2015%2F11%2Fmain%2Ffofoma051120100_0.jpg%3Fitok%3DuG-PCDzS&w=700&q=85'
                            }
                        ]
                    })
                }, 1000)
            })
        }
    }


</script>
<style scoped>
    .recipes{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: center;
    }


</style>