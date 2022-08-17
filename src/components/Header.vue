<template>
  <v-container>
    <v-toolbar background-color="grey">
      <v-toolbar-title class="text-uppercase grey--text !important">
        <router-link to="/">
          <span class="font-weight-light">Just</span>
          <span class="font-weight-bold">Shoes</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- search bar -->
      <searchbar />

      <!-- <v-text-field
        placeholder="Search"
        rounded
        dense
        append-icon="search"
        outlined
        class="shrink mt-6"
        color="#FFDA00"
        active
      ></v-text-field> -->
      <v-spacer></v-spacer>
      <!-- account sign up and sign in -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn flat text v-on="on"
            ><i class="material-icons">person_outline</i>Account<i
              class="material-icons"
              >keyboard_arrow_down</i
            ></v-btn
          >
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Item 1</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Item 2</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- dropdown help -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn flat text v-on="on"
            ><i class="material-icons">help_outline</i>Help<i
              class="material-icons"
              >keyboard_arrow_down</i
            ></v-btn
          >
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Item 1</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Item 2</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- cart -->
      <v-btn flat text>
        <v-icon left color="blue">shopping_cart</v-icon>
        <span class="font-weight-medium">Cart</span>
      </v-btn>
    </v-toolbar>
  </v-container>
</template>

<script>
import Searchbar from "../components/Searchbar.vue";
export default {
  name: "Header",
  components: { Searchbar },
};
</script>

<style scoped>
.headerdes {
  background-color: red;
}

.fa-shoe-prints {
  color: white;
  font-size: 1rem;
}
</style>