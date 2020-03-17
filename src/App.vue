<template>
  <div id="app">
    <div>
      <Header />
    </div>
    <div>
        <b-container class="bv-example-row">
          <b-row class="text-center">
          <b-col><categories /></b-col>
          <b-col cols="9"><SliderProducts /></b-col>
          </b-row>
        </b-container>
    </div>
       <Products v-bind:proInfo="productInfo" />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import SliderProducts from './components/SliderProducts.vue'
import Categories from './components/Categories.vue'
import Products from './components/Products.vue'
export default {
  name: 'App',
  components: {
    Header,
    SliderProducts,
    Categories,
    Products
  },
  data() {
    return {
      productInfo: [
        {
        id: 1,
        itemPic: require('./assets/Casual-Khaki-Shoe.jpg'),
        itemName: 'Casual Khaki Shoe',
        price: 15000
        },
        {
        id: 2,
        itemPic: require('./assets/Dark-Leather-Pam.jpg'),
        itemName: 'Dark-Leather-Pam',
        price: 10000
        },
        {
        id: 3,
        itemPic: require('./assets/Fancy-Pam.jpg'),
        itemName: 'Fancy Pam',
        price: 50000
        },
        {
        id: 4,
        itemPic: require('./assets/Fancy-Sneakers.jpg'),
        itemName: 'Fancy Sneakers',
        price: 30000
        },
        {
        id: 5,
        itemPic: require('./assets/Heavy-boot.jpg'),
        itemName: 'Heavy Boot',
        price: 20000
        },
        {
        id: 6,
        itemPic: require('./assets/leather-sandals.jpg'),
        itemName: 'Leather Sandals',
        price: 30000
        },
        {
        id: 7,
        itemPic: require('./assets/Mens-Simple-Pam.jpg'),
        itemName: 'Mens Simple Pam',
        price: 50000
        },
        {
        id: 8,
        itemPic: require('./assets/Mens-Brogue.jpg'),
        itemName: 'Mens Brogue',
        price: 45000
        },
        {
        id: 9,
        itemPic: require('./assets/Mens-Simple-Pam.jpg'),
        itemName: 'PU Leather Black Shoe',
        price: 100000
        },
        {
        id: 10,
        itemPic: require('./assets/leather-sandals.jpg'),
        itemName: 'Leather Sandals',
        price: 6000
        }

      ]
    }
  }
  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}
.bv-example-row{
  margin-top: 3rem;
}
</style>
