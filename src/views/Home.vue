<template>
  <div id="app">
    <v-container class="pa-12">
      <div>
        <div class="main">
          <v-row>
            <v-col cols="2"><categories /></v-col>
            <v-spacer></v-spacer>
            <v-col cols="8"><SliderProducts /></v-col>
          </v-row>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Categories from "../components/Categories.vue";
import SliderProducts from "../components/SliderProducts.vue";
import Products from "../components/Products.vue";

export default {
  name: "Home",
  components: {
    Categories,
    SliderProducts,
    Products,
  },
  methods: {
    ...mapActions(["getHomeProducts"]),
  },
  mounted() {
    this.getHomeProducts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
.col-style {
  text-align: center;
}

.main {
  margin-top: 3rem;
}

.main-row {
  display: flex;
  flex-direction: row;
}
.col-style {
  width: 20%;
  background-color: white;
  margin-left: 4rem;
  padding: 1rem;
  border-radius: 1rem;
}

.slidesty {
  /* height: 30rem; */
  width: 80%;
  margin-left: 3rem;
  margin-right: 4rem;
  padding: 1rem;
  border-radius: 1rem;
}
.footy {
  background-color: #212529;
  padding-top: 3rem;
  padding-bottom: 0.5rem;
}
.foot {
  background-color: #212529;
  padding-bottom: 1rem;
}
</style>
