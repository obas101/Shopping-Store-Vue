<template>

<div>
  <b-navbar class="headerdes" toggleable="lg" type="dark" variant="dark">
    <i class="fas fa-shoe-prints"></i>
    <b-navbar-brand href="#">Just Shoes</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
   

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>


        

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Profile</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>   
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