<template>
<nav>
  <v-toolbar flat app background-color="grey">
    <v-toolbar-title class="text-uppercase grey--text !important" >
      <router-link to="/">
      <span class="font-weight-light">Just</span>
      <span class="font-weight-bold">Shoes</span>
      </router-link>    
    </v-toolbar-title>
    <v-spacer></v-spacer>
      <v-text-field
        placeholder="Search"
        rounded
        dense
        append-icon="search"
        outlined
        class="shrink mt-6"
        color="#FFDA00"
        active
      ></v-text-field>

    <v-btn flat text>
    <span class="font-weight-medium">Sign In</span>
  </v-btn>

    <v-btn flat text>
    <span class="font-weight-medium">Sign Up</span>
  </v-btn>
  
  <v-btn flat text>
    <v-icon left color="#FFDA00">shopping_cart</v-icon>
    <span class="font-weight-medium">Cart</span>
  </v-btn>
  </v-toolbar>
</nav>



</template>

<script>
export default {
    name: 'Header'
    
}
</script>

<style scoped>
.headerdes {
  background-color: red
} 


.fa-shoe-prints {
  color:white;
  font-size: 1rem;
}

</style>