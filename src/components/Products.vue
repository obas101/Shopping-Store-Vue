<template>
        <div class="stylusdiv">
            <div v-bind:key="display.productId" v-for="display in allProducts.products" class="tile-style">
            <v-card :to="`/productinfo/${display.productId}/${display.productName.replace(/[' ']+/g, '-').toLowerCase()}`">
            
            <v-img
                :src="display.productThumb"
                height="208px"
                width="208px"
            >
            </v-img>
            
            <v-card-title  class="itemName-style">
                {{display.productName}}
            </v-card-title>
            
            <v-card-subtitle class="price">
                &#8358;{{display.productPrice}}
            </v-card-subtitle>

            <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="16"
        ></v-rating>

        <span class="grey--text ml-4">(413)</span>
      </v-row>
      </v-card-text>
            <v-card-action>
                <v-btn color="#FFDA00" small="">
                    ADD TO CART
                </v-btn>
            </v-card-action>
            </v-card>
            </div>
        </div>  
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'Products',
    computed: mapState({
        allProducts: 'products'
    })
};

</script>

<style scoped>
    /* .displayPro {
        display: inline-block;
        margin-left: 4.5rem;
        justify-content: center;
        margin-top: 3rem;
        text-align: center;
     } */

    .stylusdiv {
        justify-content: center;
        margin-top: 3rem;
        margin: 0.3rem;
        direction: flex;

    }
    .tile-style {
        width: 208px;
        display: inline-block;
        text-align: center !important;
        margin: 0.1rem;

    }
    .itemName-style{
        font-size: 12px;
        text-align: center !important;
    }
    .price{
        font-size: 14px;
        color: #282828;
        font-weight: 500;
    }
</style>