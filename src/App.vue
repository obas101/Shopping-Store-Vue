<template>
  <v-app id="app">
    <Header />
    <router-view/>
    <div class="footy">
    <Footer />
    </div>

    <div  class="foot">
      <b-container class="bv-example-row footy" >
          <b-row class="text-center">
            <b-col class="col-style" ><Socials /></b-col>
            <b-col><Payments /></b-col>
          </b-row>
        </b-container>
    </div>
  </v-app>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Socials from './components/Socials.vue'
import Payments from './components/Payments.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Socials,
    Payments
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F5F5F5;
}

</style>