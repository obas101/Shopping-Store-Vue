<template>
        <div class="stylusdiv">
            <b-card  
                
                class="mb-2 displayPro"
                v-bind:key="display.id" v-for="display in proInfo"
                >
                <productsItem v-bind:proInfo="display"/>
            </b-card>
        </div>

</template>

<script>
import ProductsItem from './ProductsItem'
export default {
    name: 'Products',
    components: {
        ProductsItem
        },
    props: ['proInfo']
}
</script>

<style scoped>
    .displayPro {
        display: inline-block;
        margin-left: 4.5rem;
        justify-content: center;
        margin-top: 3rem;
        text-align: center;
        
    }
    .stylusdiv {
        justify-content: center;
        margin-top: 3rem;
        margin: 0 auto;
        direction: flex;

    }
</style>